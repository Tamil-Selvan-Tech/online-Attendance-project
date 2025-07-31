import React, { useEffect, useState } from 'react';
import './list.css';

const List = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const students = [
    { name: "Suman", regNo: "22SCT1546" },
    { name: "Tamil Selvan", regNo: "22SCT1547" },
    { name: "Dinesh Kumar", regNo: "22SCT1516" },
    { name: "Logapriyan", regNo: "22SCT1527" },
    { name: "Manohar", regNo: "22SCT1530" },
    { name: "Nandha Kumar", regNo: "22SCT1525" },
    { name: "Pradeep", regNo: "22SCT1522" },
    { name: "Monish", regNo: "22SCT1525" },
    { name: "Cibichandran", regNo: "22SCT1518" },
    { name: "Palanibharathi", regNo: "22SCT1522" }
  ];

  const totalRows = 35;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Attendance submitted!");
  };

  return (
    <div className="list-body">
      <h1>Attendance List</h1>
      <div id="date-time">
        {dateTime.toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })}
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Register Number</th>
                <th>Attendance Status</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(totalRows)].map((_, index) => {
                const student = students[index % students.length];
                const rowNum = index + 1;
                return (
                  <tr key={rowNum}>
                    <td>{rowNum}</td>
                    <td>{student.name}</td>
                    <td>{student.regNo}</td>
                    <td>
                      <div className="radio-container">
                        <div className="radio-item">
                          <input
                            type="radio"
                            id={`present-${rowNum}`}
                            name={`status-${rowNum}`}
                            value="Present"
                            required
                          />
                          <label htmlFor={`present-${rowNum}`}>Present</label>
                        </div>
                        <div className="radio-item">
                          <input
                            type="radio"
                            id={`absent-${rowNum}`}
                            name={`status-${rowNum}`}
                            value="Absent"
                          />
                          <label htmlFor={`absent-${rowNum}`}>Absent</label>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button type="submit">Submit Attendance</button>
        </form>
      </div>
    </div>
  );
};

export default List;
