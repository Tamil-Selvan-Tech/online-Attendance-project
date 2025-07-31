import React from 'react'
import './department.css'
import { Link } from 'react-router-dom'

const Department = () => {
    return (
        <div className="department-body">

            <h1>B.Sc. Computer Technology</h1>
            <table className='department-table'>
                <thead className='department-head'>
                    <tr>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Link to="/List/:year">I-Year</Link></td>
                    </tr>
                    <tr>
                        <td ><Link to="/List/:year">II-Year</Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/List/:year">III-Year</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Department