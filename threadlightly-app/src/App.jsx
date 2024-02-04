import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import HomePage from './HomePage'
import Footer from './Footer/Footer'
import './App.css'
import Dashboard from './Dashboard/dashboard'

function App() {


  return (
    <BrowserRouter>
      <div className="site-container">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
