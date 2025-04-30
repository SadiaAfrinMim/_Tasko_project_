import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Image from '../assets/image.png';

const MainLayout = () => {
  return (
    <div>
      {/* Header with background image */}
      <header
        className="bg-cover bg-center bg-no-repeat h-64"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="relative bottom-32 z-50 ">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
