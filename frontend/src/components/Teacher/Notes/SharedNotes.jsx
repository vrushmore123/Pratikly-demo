// src/student/SharedNotes.jsx (or teacher/SharedNotes.jsx)
import React from "react";

const sharedNotes = [
  {
    id: 1,
    title: "Introduction to React",
    subject: "Web Development",
    sharedBy: "Mr. Smith",
    date: "2025-05-03",
    link: "#",
  },
  {
    id: 2,
    title: "Photosynthesis Summary",
    subject: "Biology",
    sharedBy: "Ms. Johnson",
    date: "2025-05-01",
    link: "#",
  },
  {
    id: 3,
    title: "Shakespeare Analysis",
    subject: "English Literature",
    sharedBy: "Alice (Classmate)",
    date: "2025-04-30",
    link: "#",
  },
];

const SharedNotes = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📘 Shared Notes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Subject</th>
              <th className="px-4 py-2 border">Shared By</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {sharedNotes.map((note, index) => (
              <tr key={note.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{note.title}</td>
                <td className="px-4 py-2 border">{note.subject}</td>
                <td className="px-4 py-2 border">{note.sharedBy}</td>
                <td className="px-4 py-2 border">{note.date}</td>
                <td className="px-4 py-2 border">
                  <a
                    href={note.link}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SharedNotes;
