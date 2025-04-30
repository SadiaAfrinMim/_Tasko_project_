import React from 'react';
import { FiDelete } from 'react-icons/fi';
import { MdDateRange } from 'react-icons/md';
import Image from '../../assets/image.png';
import { BiTrash, BiTrashAlt } from 'react-icons/bi';

const AllTask = () => {
    return (
       <div>

<div className="space-y-4 p-4 bg-white rounded-xl border-gray-700 shadow-sm">
            
            {/* Top Section: Image + Title + Delete */}
            <div className="flex items-center justify-between gap-4">
                
                {/* Left: Image */}
                <div>
                    <img src={Image} alt="Task" className="w-16 h-16 object-cover rounded-lg" />
                </div>
                
                {/* Middle: Title & Description */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className='flex'>
                  <div>
                   <h3 className="text-lg font-semibold">Lorem ipsum dolor sit amet.</h3>
                    <p className="text-sm text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, rerum!
                    </p>
                   </div>
                    <div className="text-red-500 text-xl cursor-pointer">
                    <BiTrash/>
                  </div>
                </div>
                </div>

                {/* Right: Delete Icon */}
                
            </div>

            {/* Bottom Section: Date + Status */}
            <div className="flex items-center justify-between">
                
                {/* Left: Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MdDateRange className="text-base" />
                    <p>Lorem, ipsum dolor.</p>
                </div>

                {/* Right: Status */}
                <div>
                    <p className="text-sm font-medium text-yellow-600">Pending</p>
                </div>
            </div>
        </div>




        
       </div>
    );
};

export default AllTask;
