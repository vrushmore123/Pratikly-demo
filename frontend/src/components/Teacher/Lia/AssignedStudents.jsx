import React, { useEffect, useState } from 'react';

const AssignedStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Simulate API call
    const fetchedStudents = [
      { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
      { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    ];
    setStudents(fetchedStudents);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Assigned Students</h2>
      {students.length === 0 ? (
        <p>No students assigned.</p>
      ) : (
        <table className="min-w-full bg-white border rounded">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="py-2 px-4">{student.name}</td>
                <td className="py-2 px-4">{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AssignedStudents;
