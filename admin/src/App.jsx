import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { ToastContainer } from 'react-toastify';


export const backendURL=import.meta.env.VITE_BACKEND_URL
const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):"");
  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])
  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {token === "" ? <Login setToken={setToken} /> : <>
        <Navbar setToken={setToken}/>
        <hr />
        <div className="flex w-full">
          <Sidebar />
          <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
            <Routes>
              <Route path='/add' element={<Add Token={setToken}/>} />
              <Route path='/list' element={<List Token={setToken}/>} />
              <Route path='/Orders' element={<Orders Token={setToken}/>} />
            </Routes>
          </div>
        </div>
      </>
      }

    </div>
  )
}

export default App
