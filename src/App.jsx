import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Department from './components/Department.jsx'
import List from './components/List.jsx'
import Login from './components/Login.jsx'
import Period from './components/Period.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* When visiting '/', redirect to '/Login' */}
        <Route path="/" element={<Navigate to="/Login" />} />
        
        <Route path="/Login" element={<Login />} />
        <Route path="/Period" element={<Period />} />
        <Route path="/Department" element={<Department />} />
        <Route path="/List/:year" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
