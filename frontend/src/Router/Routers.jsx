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
import HomePage from '../Pages/Homepage/Homepage';
import AddTask from '../Pages/AddTask/AddTask';
import PrivateRoute from './PrivateRoute';
import EditTaskModal from '../Component/Modal/EditTaskModal';

const Routers = () => {
    return (
        <Routes>
        <Route path="/" element={<MainLayout />} >
        <Route  path="/" element={<PrivateRoute><HomePage></HomePage></PrivateRoute>}></Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>}/>
      <Route path='/forgetpassword' element={<ForgetPassword></ForgetPassword>}></Route>
      <Route path="/dashboard" element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}></Route>
      <Route path='/task/:id' element={<ViewTask></ViewTask>}></Route>
      <Route path='/spin' element={<PrivateRoute><Spinner></Spinner></PrivateRoute>}></Route>
     
      <Route path='/error' element={<ErrorPage></ErrorPage>}></Route>
      <Route path='/add' element={<AddTask></AddTask>}></Route>
        </Route>
        
       
      </Routes>
    );
};

export default Routers;