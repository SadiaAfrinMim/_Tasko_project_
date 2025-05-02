// Component/Modal/EditModal.jsx
import React from 'react';
import { Select, DatePicker } from 'antd';

const { Option } = Select;

const EditModal = ({
  visible,
  onCancel,
  title,
  setTitle,
  categoryValue,
  setCategoryValue,
  description,
  setDescription,
  selectedDate,
  setSelectedDate,
  statusValue,
  setStatusValue,
  handleSubmit,
  statusColors,
  filterOption,
}) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl w-full overflow-y-auto max-h-[90vh]">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Category</label>
            <Select
              showSearch
              value={categoryValue}
              onChange={setCategoryValue}
              placeholder="Select Category"
              optionFilterProp="children"
              filterOption={filterOption}
              style={{ width: '100%', height: '48px' }}
              className="rounded-xl"
              dropdownStyle={{
                borderRadius: '12px',
                border: '2px solid #F4F4F4',
                boxShadow: '0 10px 20px rgba(94, 86, 231, 0.1)',
              }}
              suffixIcon={<span className="text-[#5E56E7]">▼</span>}
            >
              {['Development', 'Design', 'Marketing', 'Research'].map((category, idx) => (
                <Option key={idx} value={category}>
                  <div className="flex justify-between items-center">
                    <span>{category}</span>
                    {categoryValue === category && <span className="text-[#5E56E7]">✔</span>}
                  </div>
                </Option>
              ))}
            </Select>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700 mb-1 block">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
              className="w-full p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Date */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Date</label>
            <DatePicker
              value={selectedDate}
              onChange={setSelectedDate}
              className="w-full h-[48px] rounded-xl"
            />
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Status</label>
            <Select
              showSearch
              value={statusValue}
              onChange={setStatusValue}
              placeholder="Select Status"
              optionFilterProp="children"
              filterOption={filterOption}
              style={{ width: '100%', height: '48px' }}
              className="rounded-xl"
              dropdownStyle={{
                borderRadius: '12px',
                border: '2px solid #F4F4F4',
                boxShadow: '0 10px 20px rgba(94, 86, 231, 0.1)',
              }}
              suffixIcon={<span className="text-[#5E56E7]">▼</span>}
            >
              {Object.keys(statusColors).map((status, idx) => (
                <Option key={idx} value={status}>
                  <div className="flex justify-between items-center">
                    <span>{status}</span>
                    {statusValue === status && <span className="text-[#5E56E7]">✔</span>}
                  </div>
                </Option>
              ))}
            </Select>
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex gap-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition"
            >
              Update Task
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="w-full bg-gradient-to-r from-gray-300 to-gray-400 text-gray-700 py-3 rounded-xl font-medium hover:from-gray-400 hover:to-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
