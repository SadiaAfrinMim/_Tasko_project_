import React, { useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import { BiTrash } from 'react-icons/bi';
import { Select } from 'antd';
import Image from '../../assets/image.png';
import SubmitModal from '../../Component/Modal/SubmitModal';
import DeleteModal from '../../Component/Modal/DeletModal';

const { Option } = Select;

const ViewTask = () => {
    const [categoryValue, setCategoryValue] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showSubmitModal, setShowSubmitModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);


    const filterOption = (input, option) =>
        option?.children?.toLowerCase().includes(input.toLowerCase());

    return (
        <>
            {/* Main Container */}
            <div className="max-w-[90%] mx-auto my-10 bg-white rounded-[2.5rem] shadow-2xl p-6  flex flex-col gap-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b pb-4">
                    <h2 className="text-2xl font-bold text-[#5E56E7]">Task Details</h2>
                    <div className="flex gap-3">
                    <button
    onClick={() => setIsEditing(true)}
    className="px-5 py-2 rounded-xl bg-[#E0DEFF] text-[#5E56E7] font-semibold hover:bg-[#d6d3ff] transition"
>
    Edit Task
</button>

                        <button className="px-5 py-2 rounded-xl bg-[#5E56E7] text-white font-semibold hover:bg-[#4b45c7] transition">Back</button>
                    </div>
                </div>

                {/* Task Card */}
                <div className="mt-12 space-y-8">

                    {/* Top: Image + Title + Delete */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                        <img src={Image} alt="Task" className="w-20 h-20 object-cover rounded-xl" />
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-800">Lorem ipsum dolor sit amet.</h3>
                            <p className="text-gray-600 mt-1 text-sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, rerum!
                            </p>
                        </div>
                        <div
                            onClick={() => setShowDeleteModal(true)}
                            className="text-red-500 border-2 p-1 border-red-500 rounded-full text-4xl cursor-pointer hover:text-red-600 transition-all"
                        >
                            <BiTrash />
                        </div>
                    </div>

                    {/* Bottom: Date + Status + Category */}
                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MdDateRange className="text-base" />
                            <span>12 April 2025</span>
                        </div>

                        <div>
                            <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">Pending</span>
                        </div>
                    </div>

                    {/* Category Dropdown */}
                    {isEditing && (
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
    </div>
)}


                    {/* Footer Buttons */}
                    <div className='flex gap-4 justify-end'>
                        <button
                            onClick={() => setShowDeleteModal(true)}
                            className="px-5 py-2 rounded-xl bg-red-100 text-red-500 hover:bg-red-200 transition"
                        >
                            Delete Task
                        </button>
                        <button
                            onClick={() => setShowSubmitModal(true)}
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
    onConfirm={() => {
        // your delete logic
        setShowDeleteModal(false);
    }}
/>

            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md shadow-xl space-y-6 text-center">
                        <h3 className="text-xl font-semibold text-red-500">Are you sure?</h3>
                        <p className="text-gray-600">This task will be permanently deleted.</p>
                        <div className="flex justify-center gap-4 mt-6">
                            <button
                                onClick={() => setShowDeleteModal(false)}
                                className="px-6 py-2 rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    setShowDeleteModal(false);
                                    // perform deletion logic here
                                }}
                                className="px-6 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600"
                            >
                                Yes, Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Submit Modal */}
            {showSubmitModal && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md shadow-xl space-y-6 text-center">
                        <h3 className="text-2xl font-bold text-[#5E56E7]">🎉 Congratulations!</h3>
                        <p className="text-gray-600">Your task has been submitted successfully.</p>
                        <button
                            onClick={() => setShowSubmitModal(false)}
                            className="mt-4 px-6 py-2 rounded-xl bg-[#5E56E7] text-white hover:bg-[#4b45c7]"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ViewTask;
