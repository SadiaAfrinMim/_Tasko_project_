import React, { useState, useEffect } from 'react';
import { MdDateRange } from 'react-icons/md';
import { BiTrash } from 'react-icons/bi';
import { Select, message } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import SubmitModal from '../../Component/Modal/SubmitModal';
import DeleteModal from '../../Component/Modal/DeletModal';

import Image from '../../assets/image.png';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import EditModal from '../../Component/Modal/EditTaskModal';

const { Option } = Select;

const ViewTask = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState(null);
    const [categoryValue, setCategoryValue] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [statusValue, setStatusValue] = useState('');

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const res = await axios.get(`http://localhost:9000/tasks/${id}`);
                setTask(res.data);
                setCategoryValue(res.data.category || '');
                setTitle(res.data.title || '');
                setDescription(res.data.description || '');
                setSelectedDate(res.data.date ? dayjs(res.data.date) : null);
                setStatusValue(res.data.status || '');
            } catch (err) {
                console.error(err);
                message.error('Failed to fetch task.');
            }
        };

        fetchTask();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:9000/tasks/${id}`);
            toast.success('Task deleted successfully.');
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            toast.error('Delete failed.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:9000/tasks/${id}`, {
                title,
                description,
                date: selectedDate,
                category: categoryValue,
                status: statusValue,
            });
            toast.success('Task updated successfully.');
            setTask((prev) => ({
                ...prev,
                title,
                description,
                date: selectedDate,
                category: categoryValue,
                status: statusValue,
                
            }));
            setShowEditModal(false);
        } catch (err) {
            toast.error('Failed to update task.');
            console.error(err);
        }
    };

    const handleCategoryChange = async () => {
        try {
            await axios.patch(`http://localhost:9000/tasks/${id}`, { category: categoryValue });
            toast.success('Category updated.');
        } catch (err) {
            console.error(err);
            toast.error('Category update failed.');
        }
    };
    

    const filterOption = (input, option) =>
        option?.children?.toLowerCase().includes(input.toLowerCase());

    if (!task) return <div className="text-center mt-10">Loading...</div>;

    return (
        <>
            <div className="max-w-11/12 rounded-2xl mx-auto my-10 bg-white shadow-2xl p-6 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-4">
                    <h2 className="text-2xl font-bold text-[#5E56E7]">Task Details</h2>
                    <div className="flex gap-3">
                        <button
                            className="px-5 py-2 rounded-xl bg-[#E0DEFF] text-[#5E56E7] font-semibold hover:bg-[#d6d3ff] transition"
                            onClick={() => setShowEditModal(true)}
                        >
                            Edit Task
                        </button>
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="px-5 py-2 rounded-xl bg-[#5E56E7] text-white font-semibold hover:bg-[#4b45c7] transition"
                        >
                            Back
                        </button>
                    </div>
                </div>

                <div className="mt-12 space-y-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                        <img src={Image} alt="Task" className="w-20 h-20 object-cover rounded-xl" />
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
                            <p className="text-gray-600 mt-1 text-sm">{task.description}</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MdDateRange className="text-base" />
                            <span>{new Date(task.date).toDateString()}</span>
                        </div>
                        <div>
                            <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
                                {task.status}
                            </span>
                        </div>
                    </div>

                    <div className="w-full lg:w-60">
                        <label className="block text-sm mb-2 text-gray-600">Change Category</label>
                        <Select
                            showSearch
                            value={categoryValue}
                            onChange={(value) => setCategoryValue(value)}
                            placeholder="Select Category"
                            optionFilterProp="children"
                            filterOption={filterOption}
                            style={{
                                width: '100%',
                                borderRadius: '12px',
                                height: '48px'
                            }}
                            suffixIcon={<span className="text-[#5E56E7]">▼</span>}
                            dropdownStyle={{
                                borderRadius: '12px',
                                border: '2px solid #F4F4F4',
                                boxShadow: '0 10px 20px rgba(94, 86, 231, 0.1)'
                            }}
                        >
                            {['Development', 'Design', 'Marketing', 'Research', 'submitted'].map((category, idx) => (
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
                    </div>

                    <div className="flex gap-4 justify-end">
                        <button
                            onClick={() => setShowDeleteModal(true)}
                            className="px-5 py-2 rounded-xl bg-red-100 text-red-500 hover:bg-red-200 transition"
                        >
                            Delete Task
                        </button>
                        <button
                            onClick={() => {
                                handleCategoryChange(); // First patch the category
                                setShowSubmitModal(true); // Then show the modal
                            }}
                            className="px-5 py-2 rounded-xl bg-[#5E56E7] text-white hover:bg-[#4b45c7] transition"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>

            <SubmitModal visible={showSubmitModal} onClose={() => setShowSubmitModal(false)} />
            <DeleteModal
                visible={showDeleteModal}
                onCancel={() => setShowDeleteModal(false)}
                onConfirm={handleDelete}
            />
            <EditModal
                visible={showEditModal}
                onCancel={() => setShowEditModal(false)}
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                categoryValue={categoryValue}
                setCategoryValue={setCategoryValue}
                statusValue={statusValue}
                setStatusValue={setStatusValue}
                handleSubmit={handleSubmit}
                statusColors={{ Pending: '#FFD700', Completed: '#4CAF50', Cancelled: '#F44336' }}
                filterOption={filterOption}
            />
        </>
    );
};

export default ViewTask;
