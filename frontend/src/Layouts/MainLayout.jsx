import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Image from '../assets/image.png';

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Header with background image and Navbar */}
      <header
        className="bg-cover bg-center bg-no-repeat h-64 relative"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="relative -z-0 -mt-20 px-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
