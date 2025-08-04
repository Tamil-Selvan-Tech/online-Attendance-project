import React from 'react'
import { Link } from 'react-router-dom'
import './period.css'

const Period = () => {
  return (
    <div className="period-body">
      <h1>Period Hours</h1>
      <div className="row">
        <form>
          <table>
            <thead>
              <tr>
                <th>I</th>
                <th>II</th>
                <th>III</th>
                <th>IV</th>
                <th>V</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><Link to="/department">11:45 AM - 12:00 PM</Link></td>
                <td><Link to="/department">12:15 AM - 01:00 PM</Link></td>
                <td><Link to="/department">02:00 PM - 03:00 PM</Link></td>
                <td><Link to="/department">03:00 PM - 04:00 PM</Link></td>
                <td><Link to="/department">10:00 AM - 11:00 AM</Link></td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}

export default Period
