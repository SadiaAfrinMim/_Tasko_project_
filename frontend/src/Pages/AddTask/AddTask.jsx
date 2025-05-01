
import { BiTrash } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';
import Image from '../../assets/image.png';
import { Select, DatePicker } from 'antd';


const { Option } = Select;

const statusColors = {
  'Not Identified': 'bg-gray-200 text-gray-800',
  'Closed': 'bg-red-100 text-red-600',
  'Communicated': 'bg-blue-100 text-blue-600',
  'Identified': 'bg-indigo-100 text-indigo-600',
  'Resolved': 'bg-green-100 text-green-600',
  'Cancelled': 'bg-yellow-100 text-yellow-600'
};

const AddTask = ({ visible, onCancel,setStatusValue,setSelectedDate,setDescription,setTitle,title, handleSubmit,categoryValue ,setCategoryValue,description,statusValue,selectedDate}) => {
  
  if (!visible) return null;
  const filterOption = (input, option) =>
    (option?.children ?? '').toLowerCase().includes(input.toLowerCase());

  

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
                boxShadow: '0 10px 20px rgba(94, 86, 231, 0.1)'
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
                boxShadow: '0 10px 20px rgba(94, 86, 231, 0.1)'
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
              Add Task
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition"
            >
              Cancel
            </button>
          </div>
        </form>

        {/* Live Preview */}
        {(title || description || categoryValue || statusValue) && (
          <div className="mt-6 p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex items-start gap-4">
              <img src={Image} alt="Preview" className="w-16 h-16 object-cover rounded-lg" />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold">{title || 'Untitled Task'}</h4>
                    <p className="text-sm text-gray-600">{description || 'No description added.'}</p>
                    <p className="text-xs text-gray-500 mt-1">Category: {categoryValue || 'N/A'}</p>
                  </div>
                  <BiTrash className="text-red-500 cursor-pointer text-xl" />
                </div>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MdDateRange className="text-base" />
                    <span>{selectedDate.format('YYYY-MM-DD')}</span>
                  </div>
                  {statusValue && (
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[statusValue]}`}>
                      {statusValue}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddTask;
