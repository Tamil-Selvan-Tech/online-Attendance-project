import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
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

          {/* Staff Name */}
          <div className="input-group">
            <select id="staff-name" name="staff-name" required defaultValue="">
              <option value="" disabled hidden></option>
              <option value="Staff1">Staff1</option>
              <option value="Staff2">Staff2</option>
              <option value="Staff3">Staff3</option>
              <option value="Staff4">Staff4</option>
            </select>
            <label htmlFor="staff-name">Staff Name</label>
          </div>

          {/* Password */}
          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder=" "
            />
            <label htmlFor="password">Password</label>
          </div>

          {/* Submit Button */}
          <button type="submit">Login</button>

        </form>
      </div>
    </div>
  )
}

export default Login
