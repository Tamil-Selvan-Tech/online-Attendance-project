import React, { useEffect, useState } from 'react';
import './list.css';

const List = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const students = [
    { name: "student1", regNo: "12345" },
    { name: "student2", regNo: "2345" },
    { name: "student3" , regNo: "3456" },
    { name: "student4", regNo: "4567" },
    { name: "student5", regNo: "1234" },
    { name: "student6", regNo: "1255" },
    { name: "student7", regNo: "272345" },
    { name: "student8", regNo: "6345825" },
    { name: "student9", regNo: "264518" },
    { name: "student10", regNo: "75322" }
  ];

  const totalRows = 10;

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
