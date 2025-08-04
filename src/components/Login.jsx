import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    // You can add password/staff name validation here if needed

    // Navigate to /period
    navigate('/period')
  }

  return (
    <div className="login-body">
      <div className="heading-container">
        <h1>Computer Technology</h1>
        <h2>Welcome to the Staff Portal</h2>
      </div>
      
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <label htmlFor="staff-name">Staff Name:</label>
          <select id="staff-name" name="staff-name" required>
            <option value="">Select Staff</option>
            <option value="Staff1">Staff1</option>
            <option value="Staff2">Staff2</option>
            <option value="Staff3">Staff3</option>
            <option value="Staff4">Staff4</option>
          </select>

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
