import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import Image from '../assets/image.png';
import useAuth from '../Hooks/useAuth';

const MainLayout = () => {
  const {user} = useAuth()
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F8F7FF]">
      {/* Header Section */}
      <header className="relative h-72 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url(${Image})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5E56E7]/80 to-transparent z-0" />

        {/* Decorations (lightweight, optional) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-4 right-4 w-24 h-24 bg-white rounded-full opacity-10"></div>
          <div className="absolute bottom-4 left-10 w-16 h-16 bg-white rounded-full opacity-10"></div>
        </div>

        {/* Navbar & Header Content */}
        <div className="relative z-10">
          <Navbar />
        
        </div>
        <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-1">TaskFlow!Hi</h1>
              <p className="text-white/80 text-sm md:text-2xl">Organize your work the smarter way</p>
            </div>
          </div>
      </header>

      {/* Main Content */}
      <main className="-mt-14 relative z-10 px-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#333333] mt-20 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="h-8 w-8 bg-[#5E56E7] rounded-lg flex items-center justify-center font-bold">T</div>
            <span className="font-bold">TaskFlow</span>
          </div>
          <div className="flex gap-4 text-[#999999]">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 h-12 w-12 bg-[#5E56E7] rounded-full text-white shadow-lg hover:bg-[#4d46cf] flex items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7 7 7M12 3v18" />
        </svg>
      </button>
    </div>
  );
};

export default MainLayout;
