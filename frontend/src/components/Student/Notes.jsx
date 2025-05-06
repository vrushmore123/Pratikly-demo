import React, { useState } from "react";

// Example notes data
const initialNotes = [
  {
    id: 1,
    title: "React Basics",
    content: "Learn about JSX, components, state, and props in React.",
    date: "2025-05-04",
  },
  {
    id: 2,
    title: "JavaScript Arrays",
    content:
      "Understand methods like map(), filter(), and reduce() for array manipulation.",
    date: "2025-05-03",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    content: "Explore utility-first CSS for rapid UI development.",
    date: "2025-05-02",
  },
];

const Notes = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  // Function to handle input change for the new note
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNote((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle adding a new note
  const handleAddNote = () => {
    if (newNote.title && newNote.content) {
      const newNoteWithDate = {
        ...newNote,
        id: Date.now(),
        date: new Date().toISOString().split("T")[0],
      };
      setNotes([...notes, newNoteWithDate]);
      setNewNote({ title: "", content: "" });
    }
  };

  // Function to handle deleting a note
  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-8">My Notes</h2>

      {/* Add new note form */}
      <div className="mb-6">
        <input
          type="text"
          name="title"
          value={newNote.title}
          onChange={handleChange}
          placeholder="Note Title"
          className="w-full p-3 mb-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="content"
          value={newNote.content}
          onChange={handleChange}
          placeholder="Note Content"
          rows="5"
          className="w-full p-3 mb-4 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddNote}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
        >
          Add Note
        </button>
      </div>

      {/* Notes List */}
      <div className="space-y-6">
        {notes.map((note) => (
          <div key={note.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{note.title}</h3>
              <button
                onClick={() => handleDeleteNote(note.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
            <p className="text-gray-700 mb-4">{note.content}</p>
            <div className="text-sm text-gray-500">Created on: {note.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
