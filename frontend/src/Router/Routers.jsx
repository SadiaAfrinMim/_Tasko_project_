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

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgetpassword" element={<ForgetPassword />} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/task/:id" element={<ViewTask />} />
                <Route path="/spin" element={<PrivateRoute><Spinner /></PrivateRoute>} />
                <Route path="/add" element={<AddTask />} />
            </Route>
            
            {/* Error Route */}
            <Route path="/error" element={<ErrorPage />} />
        </Routes>
    );
};

export default Routers;
