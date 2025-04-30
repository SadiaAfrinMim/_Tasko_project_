import React from 'react';
import { Select, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import AllTask from './AllTask';

const Dashboard = () => {
    // Custom filter option function
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <div 
            className="max-w-10/12 mx-auto rounded-[2.5rem] overflow-hidden bg-white shadow-2xl flex flex-col md:flex-row min-h-screen"
            style={{ 
                backgroundColor: '#FFFFFF',
                boxShadow: '0 20px 40px rgba(94, 86, 231, 0.1)'
            }}
        >
            {/* Main Content Container */}
            <div className="flex-1 p-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                    <h3 
                        className="text-3xl font-bold mb-0"
                        style={{ color: '#5E56E7' }}
                    >
                        All Task List
                    </h3>
                    
                    {/* Filters Section */}
                    <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                        <div className="flex-1">
                            <Select
                                showSearch
                                style={{ 
                                    width: '100%',
                                    border: '2px solid #F4F4F4',
                                    borderRadius: '12px',
                                    height: '48px'
                                }}
                                placeholder="Filter by Status"
                                optionFilterProp="label"
                                filterOption={filterOption}
                                options={[
                                    { value: '1', label: 'Not Identified' },
                                    { value: '2', label: 'Closed' },
                                    { value: '3', label: 'Communicated' },
                                    { value: '4', label: 'Identified' },
                                    { value: '5', label: 'Resolved' },
                                    { value: '6', label: 'Cancelled' },
                                ]}
                                suffixIcon={<span className="text-[#5E56E7]">▼</span>}
                                dropdownStyle={{
                                    borderRadius: '12px',
                                    border: '2px solid #F4F4F4',
                                    boxShadow: '0 10px 20px rgba(94, 86, 231, 0.1)'
                                }}
                            />
                        </div>
                        
                        <div className="flex-1">
                            <Select
                                showSearch
                                style={{ 
                                    width: '100%',
                                    border: '2px solid #F4F4F4',
                                    borderRadius: '12px',
                                    height: '48px'
                                }}
                                placeholder="Filter by Category"
                                optionFilterProp="label"
                                filterOption={filterOption}
                                options={[
                                    { value: '1', label: 'Development' },
                                    { value: '2', label: 'Design' },
                                    { value: '3', label: 'Marketing' },
                                    { value: '4', label: 'Research' },
                                ]}
                                suffixIcon={<span className="text-[#5E56E7]">▼</span>}
                                dropdownStyle={{
                                    borderRadius: '12px',
                                    border: '2px solid #F4F4F4',
                                    boxShadow: '0 10px 20px rgba(94, 86, 231, 0.1)'
                                }}
                            />
                        </div>
                        
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

                {/* Task List Section */}
                <div 
                    className="bg-[#F8F7FF] rounded-2xl p-6 shadow-sm"
                    style={{ minHeight: '600px' }}
                >
                    <AllTask />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;