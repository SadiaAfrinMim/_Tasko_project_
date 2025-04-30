import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import ForgetPassword from '../Pages/ForgetPassword/ForgetPassword';
import Dashboard from '../Pages/Dashboard/Dashboard';
import ViewTask from '../Pages/Dashboard/ViewTask';
import Spinner from '../Pages/Spinner/Spinner';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const Routers = () => {
    return (
        <Routes>
        <Route path="/" element={<MainLayout />} >
        <Route path="/login" element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>}/>
      <Route path='/forgetpassword' element={<ForgetPassword></ForgetPassword>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/view' element={<ViewTask></ViewTask>}></Route>
      <Route path='/spin' element={<Spinner></Spinner>}></Route>
      <Route path='/error' element={<ErrorPage></ErrorPage>}></Route>
        </Route>
        
       
      </Routes>
    );
};

export default Routers;