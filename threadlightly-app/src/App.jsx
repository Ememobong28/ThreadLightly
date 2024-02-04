import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import Login from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import HomePage from './HomePage'
import Footer from './Footer/Footer'
import './App.css'

function App() {


  return (
    <BrowserRouter>
      <div className="site-container"> {/* Wrapper for sticky footer */}
        <Navbar />
        <div className="content-wrap"> {/* Content wrapper for pushing the footer down */}
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
        </div>
        <Footer /> {/* Footer outside the Routes but inside the site-container */}
      </div>
    </BrowserRouter>
  )
}

export default App
