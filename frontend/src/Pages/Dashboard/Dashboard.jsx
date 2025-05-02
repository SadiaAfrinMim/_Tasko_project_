import React, { useState, useEffect } from 'react';
import { Select, Button, message } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import axios from 'axios';
import AllTask from './AllTask';
import AddTask from '../AddTask/AddTask';
import dayjs from 'dayjs';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';


const { Option } = Select;

const Dashboard = () => {
    const { user } = useAuth()
    const [tasks, setTasks] = useState([]);
    const [statusValue, setStatusValue] = useState(null);
    const [categoryValue, setCategoryValue] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [selectedDate, setSelectedDate] = useState(dayjs());




    const handleSubmit = async (e) => {
        e.preventDefault();

        const taskData = {
            title,
            description,
            category: categoryValue,
            date: selectedDate.format('YYYY-MM-DD'),
            status: statusValue,
            email: user,
        };

        try {
            const res = await axios.post('https://backend-lime-three-30.vercel.app/tasks', taskData);
            toast.success('Task added successfully');

            // 👇 Re-fetch tasks after adding a new one
            await getTasks();

            // Clear fields
            setTitle('');
            setDescription('');
            setCategoryValue('');
            setSelectedDate(dayjs());
            setStatusValue('');

            // Close modal
            onCancel();
        } catch (err) {
            console.error('Error while adding task:', err);

        }
    };


    const filterOption = (input, option) =>
        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())

    // Get tasks from API
    const getTasks = async () => {
        try {
            // Check if the user is logged in and has an email
            if (!user?.email) {
                message.error('No user logged in');
                return;
            }

            // Fetch tasks from the backend and filter by user email
            const { data } = await axios.get(`https://backend-lime-three-30.vercel.app/tasks`);

            // Filter tasks based on the logged-in user's email
            const userTasks = data.filter(task => task.email?.email === user.email);

            setTasks(userTasks); // Update the tasks state with filtered tasks
        } catch (error) {
            message.error('Failed to load tasks');
        }
    };

    useEffect(() => {
        getTasks();
    }, [user]); // Refetch tasks when user changes (e.g., on login)


    // Filter tasks
    const filteredTasks = tasks.filter(task =>
        (!statusValue || task.status === statusValue) &&
        (!categoryValue || task.category === categoryValue)
    );

    // Delete task
    const deleteTask = async (id) => {
        try {
            await axios.delete(`https://backend-lime-three-30.vercel.app/tasks/${id}`);
            toast.success('Task deleted');
            setTasks(prev => prev.filter(task => task._id !== id));
        } catch (err) {
            message.error(err, 'Failed to delete');
        }
    };

    const viewTask = async (task) => {
        try {
            const res = await axios.get(`https://backend-lime-three-30.vercel.app/tasks/${task._id}`);

        } catch (err) {
            message.error('Failed to fetch task details');
        }
    };


    return (
        <div className="max-w-11/12  mx-auto rounded-2xl bg-white shadow-2xl flex flex-col min-h-screen">
            <div className="flex-1 p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                    <h3 className="text-3xl font-bold" style={{ color: '#5E56E7' }}>All Task List</h3>

                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <Select
                            showSearch
                            value={statusValue}
                            onChange={(value) => setStatusValue(value)}
                            placeholder="Filter by Status"
                            optionFilterProp="children"
                            filterOption={filterOption}
                            style={{
                                width: '100%',
                                border: '2px solid #F4F4F4',
                                borderRadius: '12px',
                                height: '48px'
                            }}
                            suffixIcon={<span className="text-[#5E56E7]">▼</span>}
                        >
                            {['Not Identified', 'Closed', 'Communicated', 'Identified', 'Resolved', 'Cancelled'].map((status, idx) => (
                                <Option key={idx} value={status}>
                                    <div className="flex justify-between items-center">
                                        <span>{status}</span>
                                        {statusValue === status && (
                                            <span className="text-[#5E56E7]">✔</span>
                                        )}
                                    </div>
                                </Option>
                            ))}
                        </Select>

                        <Select
                            showSearch
                            value={categoryValue}
                            onChange={(value) => setCategoryValue(value)}
                            placeholder="Filter by Category"
                            optionFilterProp="children"
                            filterOption={filterOption}
                            style={{
                                width: '100%',
                                border: '2px solid #F4F4F4',
                                borderRadius: '12px',
                                height: '48px'
                            }}
                            suffixIcon={<span className="text-[#5E56E7]">▼</span>}
                        >
                            {['Development', 'Design', 'Marketing', 'Research'].map((category, idx) => (
                                <Option key={idx} value={category}>
                                    <div className="flex justify-between items-center">
                                        <span>{category}</span>
                                        {categoryValue === category && (
                                            <span className="text-[#5E56E7]">✔</span>
                                        )}
                                    </div>
                                </Option>
                            ))}
                        </Select>

                        <Button
                            onClick={() => setIsModalOpen(true)}
                            type="primary"
                            icon={<DownloadOutlined />}
                            style={{
                                height: '48px',
                                backgroundColor: '#5E56E7',
                                border: 'none',
                                borderRadius: '12px',
                                fontWeight: '600',
                                padding: '0 24px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                            className="hover:scale-[1.02] transition-transform"
                        >
                            Add New Task
                        </Button>
                    </div>
                </div>

                {/* Task List */}
                <div className="bg-[#F8F7FF] rounded-2xl p-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 shadow-sm">
                    <AllTask
                        tasks={filteredTasks}
                        onDelete={deleteTask}
                        onView={viewTask}

                    />
                </div>

                <AddTask visible={isModalOpen} onCancel={() => setIsModalOpen(false)} setTitle={setTitle}
                    setDescription={setDescription}
                    setStatusValue={setStatusValue}
                    setSelectedDate={setSelectedDate}
                    categoryValue setCategoryValue={setCategoryValue} description={description} statusValue={statusValue} selectedDate={selectedDate}
                    title={title}
                    handleSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default Dashboard;
