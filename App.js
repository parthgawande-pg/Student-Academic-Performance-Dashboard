import { useState } from "react";
import "./App.css";


function App() {
  const [hours, setHours] = useState(0);

  const study = () => {
    const newHours = hours + 1;
    setHours(newHours);

    if (newHours === 5) {
      alert("Excellent! You completed 5 study hours today.");
    }
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <header>
        <h1>Student Academic Performance Dashboard</h1>

        <h3>Name : Parth Gawande</h3>
        <h3>USN : CS24160</h3>

        <p>
          <b>Problem Statement:</b> A university seeks to provide students with
          a centralized academic portal to monitor educational progress
          throughout the semester. Design a Student Dashboard displaying
          attendance records, assignment deadlines, examination schedules,
          academic performance charts, course completion status, achievements,
          announcements, personalized calendars, and productivity insights
          within a responsive interface.
        </p>
      </header>

      <div className="container">

        <div className="card">
          <h2>Attendance</h2>
          <p>Java : 92%</p>
          <p>Python : 88%</p>
          <p>Web Technology : 95%</p>
          <p>Database : 90%</p>
        </div>

        <div className="card">
          <h2>Assignment Deadlines</h2>
          <ul>
            <li>Java Project - 5 July</li>
            <li>Python Assignment - 8 July</li>
            <li>DBMS Lab - 10 July</li>
            <li>Web Technology - 15 July</li>
          </ul>
        </div>

        <div className="card">
          <h2>Exam Schedule</h2>

          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Subject</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>15 July</td>
                <td>Java</td>
              </tr>

              <tr>
                <td>17 July</td>
                <td>Python</td>
              </tr>

              <tr>
                <td>20 July</td>
                <td>DBMS</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2>Academic Performance</h2>

          <label>Java</label>

          <div className="progress">
            <div className="fill" style={{ width: "85%" }}>
              85%
            </div>
          </div>

          <label>Python</label>

          <div className="progress">
            <div className="fill" style={{ width: "78%" }}>
              78%
            </div>
          </div>

          <label>DBMS</label>

          <div className="progress">
            <div className="fill" style={{ width: "90%" }}>
              90%
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Course Completion</h2>

          <p>Java</p>
          <progress value="90" max="100"></progress>

          <p>Python</p>
          <progress value="80" max="100"></progress>

          <p>Web Technology</p>
          <progress value="75" max="100"></progress>
        </div>

        <div className="card">
          <h2>Achievements</h2>

          <ul>
            <li>🏆 Coding Competition Winner</li>
            <li>⭐ 95% Attendance</li>
            <li>🎖 Best Project Award</li>
          </ul>
        </div>

        <div className="card">
          <h2>Announcements</h2>

          <marquee direction="up" height="120">
            Semester Exam Starts on 15 July.
            <br />
            <br />
            Project Submission Last Date 10 July.
            <br />
            <br />
            Industrial Visit on 25 July.
          </marquee>
        </div>

        <div className="card">
          <h2>Calendar</h2>
          <h3>{today}</h3>
        </div>

        <div className="card">
          <h2>Productivity Insights</h2>

          <p>Total Study Hours : {hours}</p>

          <button onClick={study}>Study +1 Hour</button>
        </div>

      </div>
    </div>
  );
}

export default App;