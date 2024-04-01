import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <ToastContainer />
    </div>
  )
}

export default App