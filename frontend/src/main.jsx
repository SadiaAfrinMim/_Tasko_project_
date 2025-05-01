import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter } from "react-router";
import Routers from './Router/Routers';
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';





createRoot(document.getElementById('root')).render(
 <AuthProvider>
  <BrowserRouter>
    <Routers />
  </BrowserRouter>
  <ToastContainer />
 </AuthProvider>
  

)
