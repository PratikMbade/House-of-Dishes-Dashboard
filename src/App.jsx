import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
      <Navbar/> 
      <div className='pages'>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/dashboard' element={<DashboardPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </div>
    </BrowserRouter> 
    </div>
  )
}

export default App
