import React, { useState } from "react";

const Applications = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [applications, setApplications] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApplication = { name, email, course };
    setApplications([...applications, newApplication]);

    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <div className="applications">
      <h1>Student Internship Applications</h1>

      {/* Form to submit applications */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit Application</button>
      </form>

      <h2>Applications List</h2>
      {/* Display submitted applications */}
      <ul>
        {applications.length > 0 ? (
          applications.map((application, index) => (
            <li key={index}>
              <strong>Name:</strong> {application.name} <br />
              <strong>Email:</strong> {application.email} <br />
              <strong>Course:</strong> {application.course}
            </li>
          ))
        ) : (
          <p>No applications submitted yet.</p>
        )}
      </ul>
    </div>
  );
};

export default Applications;
