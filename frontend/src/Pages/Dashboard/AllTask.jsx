import React from 'react';
import { FiInbox } from 'react-icons/fi';
import { BiTrash } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';
import NoAvailable from './NoAvailable';
import { Link } from 'react-router-dom';

const AllTask = ({ tasks, onDelete, onView }) => {
    return tasks.length ? tasks.map((task) => (
        <div
            key={task._id}
            className="space-y-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer"
            onClick={() => onView(task)}
        >
            {/* Top Section: Icon + Title + Delete */}
            <div className="flex items-start justify-between gap-4">
                {/* Left: Icon */}
                <div className="bg-gray-100 p-4 rounded-full">
                    <FiInbox className="text-4xl text-gray-500" />
                </div>

                {/* Middle: Title and Description */}
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <Link to={`/task/${task._id}`} className="text-lg font-semibold text-gray-800">{task.title}</Link>
                        <div
                            className="text-red-500 text-xl cursor-pointer hover:text-red-600"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent card click
                                onDelete(task._id);
                            }}
                        >
                            <BiTrash />
                        </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                </div>
            </div>

            {/* Bottom Section: Date + Status */}
            <div className="flex items-center justify-between text-sm text-gray-500">
                {/* Date */}
                <div className="flex items-center gap-2">
                    <MdDateRange className="text-base" />
                    <p>{task.date || 'No date'}</p>
                </div>

                {/* Status */}
                <p className={`font-medium ${task.status === 'Pending' ? 'text-yellow-600' : 'text-green-600'}`}>
                    {task.status}
                </p>
            </div>
        </div>
    )) : <p className="text-center text-gray-500 col-span-full"><NoAvailable></NoAvailable></p>;
};

export default AllTask;
