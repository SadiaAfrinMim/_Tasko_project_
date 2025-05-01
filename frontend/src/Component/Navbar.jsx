import React, { useState } from 'react';
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { BsCheck2Square } from 'react-icons/bs'; // Logo icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Simulate auth
  const isLoggedIn = localStorage.getItem('user'); // Replace with your real auth logic

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const dropdownItems = isLoggedIn
    ? [
        {
          key: '3',
          label: <span onClick={handleLogout}>Logout</span>,
        },
      ]
    : [
        {
          key: '1',
          label: <Link to="/login">Signin</Link>,
        },
        {
          key: '2',
          label: <Link to="/signup">Signup</Link>,
        },
      ];

  return (
    <div className="fixed w-full z-10 shadow-md ">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Logo with icon */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <BsCheck2Square className="text-2xl" />
          Tasko
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/dashboard" className="hover:text-blue-500">Task List</Link>
          <Link to="/spin" className="hover:text-blue-500">Spin</Link>
        </ul>

        {/* Right Profile or Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <div className="flex items-center gap-2">
                <img
                  src="https://i.pravatar.cc/30"
                  alt="avatar"
                  className="w-8 h-8 border border-blue-600 rounded-full object-cover"
                />
                <p className="text-sm hidden sm:block text-blue-500">Sadia Mim</p>
              </div>
              <Dropdown menu={{ items: dropdownItems }}>
                <a
                  onClick={(e) => e.preventDefault()}
                  className="cursor-pointer border border-blue-500 px-3 py-1 rounded-md hover:border-blue-600"
                >
                  <Space className="text-blue-500">
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </>
          ) : (
            <div className="flex gap-3">
              <Link to="/login" className="text-blue-500 font-medium hover:text-blue-600">Signin</Link>
              <Link to="/signup" className="text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 font-medium">Signup</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden z-50 bg-white px-6 py-4 space-y-4 border-t">
          <div className="flex flex-col space-y-3 text-gray-700 font-medium">
            <Link to="/dashboard" className="hover:text-blue-500">Task List</Link>
            <Link to="/spin" className="hover:text-blue-500">Spin</Link>
            <hr />
            {isLoggedIn ? (
              <>
                <div className="flex items-center gap-3">
                  <img
                    src="https://i.pravatar.cc/30"
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>Sadia Mim</span>
                </div>
                <button onClick={handleLogout} className="text-left text-red-500 hover:underline">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-blue-500">Signin</Link>
                <Link to="/signup" className="hover:text-blue-500">Signup</Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
