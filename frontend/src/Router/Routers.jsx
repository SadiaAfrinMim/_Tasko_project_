import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';

const Routers = () => {
    return (
        <Routes>
        <Route path="/" element={<MainLayout />} >
        <Route path="/login" element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>}/>
        </Route>
        
       
      </Routes>
    );
};

export default Routers;