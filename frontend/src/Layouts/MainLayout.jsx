import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <header>
            <Navbar></Navbar>
            </header>
            <main className='pt-24 min-h-[calc(100vh-68px)]'>
                <Outlet></Outlet>
            </main>
            
        </div>
    );
};

export default MainLayout;