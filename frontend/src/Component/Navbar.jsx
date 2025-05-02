import React, { useState } from 'react';
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logOut();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path ? 'text-blue-600 font-semibold' : 'text-white';

  const dropdownItems = [
    { key: '1', label: <Link to="/profile">Profile</Link> },
    { key: '2', label: <Link to="/settings">Settings</Link> },
    { key: '3', label: <span onClick={handleLogout}>Logout</span> },
  ];

  return (
    <nav className="fixed top-0 w-full z-10 shadow-md ">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl flex gap-2 font-bold text-blue-600">
        <div className="h-10 w-10 bg-gradient-to-r from-[#5E56E7] to-[#8179FF] rounded-lg flex  items-center justify-center text-white font-bold text-xl">
            T
          </div><p className='text-white'>Tasko</p></Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 font-medium">
          <Link to="/dashboard" className={`${isActive('/dashboard')} hover:text-blue-500`}>
            Task List
          </Link>
          <Link to="/spin" className={`${isActive('/spin')} hover:text-blue-500`}>
            Spin
          </Link>
        </ul>

        {/* Auth Section - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <img
                  src={user.photoURL || 'https://i.pravatar.cc/30'}
                  alt="avatar"
                  className="w-8 h-8 border border-blue-600 rounded-full object-cover"
                />
                <p className="text-sm hidden sm:block text-blue-500">{user.displayName}</p>
              </div>
              <Dropdown menu={{ items: dropdownItems }} placement="bottomRight">
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
              <Link to="/login" className="text-blue-500 hover:text-blue-600">Signin</Link>
              <Link to="/signup" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Signup</Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 border-t">
          <Link to="/dashboard" className={`${isActive('/dashboard')} block hover:text-blue-500`}>
            Task List
          </Link>
          <Link to="/spin" className={`${isActive('/spin')} block hover:text-blue-500`}>
            Spin
          </Link>
          <hr />
          {user ? (
            <>
              <div className="flex items-center gap-3">
                <img
                  src={user.photoURL || 'https://i.pravatar.cc/30'}
                  alt="avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{user.displayName}</span>
              </div>
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                <Link to="/profile">Profile</Link>
                <Link to="/settings">Settings</Link>
                <button onClick={handleLogout} className="text-left text-red-500 hover:underline">Logout</button>
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-2">
              <Link to="/login" className="hover:text-blue-500">Signin</Link>
              <Link to="/signup" className="hover:text-blue-500">Signup</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
