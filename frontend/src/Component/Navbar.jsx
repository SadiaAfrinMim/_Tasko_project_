import React, { useState } from 'react';
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
  { key: '1', label: 'Profile' },
  { key: '2', label: 'Settings' },
  { key: '3', label: 'Logout' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed w-full  z-10 shadow-md">
      <div className=" px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">Tasko</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <li className="cursor-pointer text-blue-500">Task List</li>
          <li className="cursor-pointer text-blue-500">Spin</li>
        </ul>

        {/* Right Profile & Dropdown */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/30"
              alt="avatar"
              className="w-8 h-8 border border-blue-600 rounded-full object-cover"
            />
            <p className="text-sm hidden sm:block  text-blue-500">Sadia Mim</p>
          </div>
          <Dropdown menu={{ items }}>
  <a 
    onClick={(e) => e.preventDefault()} 
    className="cursor-pointer border border-blue-500 px-3 py-1 rounded-md transition-all hover:border-blue-600"
  >
    <Space className="text-blue-500">
      <DownOutlined className="text-blue-500" />
    </Space>
  </a>
</Dropdown>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 border-t">
          <div className="flex flex-col space-y-3 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-500">Task List</a>
            <a href="#" className="hover:text-blue-500">Spin</a>
            <hr />
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/30"
                alt="avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>Sadia Mim</span>
            </div>
            <div className="flex flex-col gap-2 text-sm text-gray-600">
              <a href="#">Profile</a>
              <a href="#">Settings</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
