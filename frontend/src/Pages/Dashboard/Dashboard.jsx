import React, { useState } from 'react';
import { Select, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import AllTask from './AllTask';

const { Option } = Select;

const Dashboard = () => {
    const [statusValue, setStatusValue] = useState(null);
    const [categoryValue, setCategoryValue] = useState(null);

    const filterOption = (input, option) =>
        (option?.children ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <div className="max-w-10/12 mx-auto rounded-[2.5rem] overflow-hidden bg-white  shadow-2xl flex flex-col md:flex-row min-h-screen"
            style={{
                backgroundColor: '#FFFFFF',
                boxShadow: '0 20px 40px rgba(94, 86, 231, 0.1)'
            }}
        >
            <div className="flex-1 p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                    <h3 className="text-3xl font-bold mb-0" style={{ color: '#5E56E7' }}>
                        All Task List
                    </h3>

                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        {/* Filter by Status */}
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
                            dropdownStyle={{
                                borderRadius: '12px',
                                border: '2px solid #F4F4F4',
                                boxShadow: '0 10px 20px rgba(94, 86, 231, 0.1)'
                            }}
                        >
                            {[
                                'Not Identified',
                                'Closed',
                                'Communicated',
                                'Identified',
                                'Resolved',
                                'Cancelled'
                            ].map((status, idx) => (
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

                        {/* Filter by Category */}
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
                            dropdownStyle={{
                                borderRadius: '12px',
                                border: '2px solid #F4F4F4',
                                boxShadow: '0 10px 20px rgba(94, 86, 231, 0.1)'
                            }}
                        >
                            {[
                                'Development',
                                'Design',
                                'Marketing',
                                'Research'
                            ].map((category, idx) => (
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

                        {/* Add Task Button */}
                        <Button
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
                    <AllTask />
                    <AllTask/>
                    <AllTask />
                    <AllTask/>
                    <AllTask />
                    <AllTask/>
                    <AllTask />
                    <AllTask/>
                    <AllTask />
                    <AllTask/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
