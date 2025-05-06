import React, { useState } from 'react';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return;
    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toLocaleString(),
    };
    setSavedNotes([newNote, ...savedNotes]);
    setTitle('');
    setContent('');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Create a Note</h2>
      <input
        className="w-full mb-2 p-2 border rounded"
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full mb-2 p-2 border rounded"
        rows="5"
        placeholder="Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Save Note
      </button>

      {savedNotes.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Saved Notes</h3>
          {savedNotes.map(note => (
            <div key={note.id} className="bg-gray-100 p-3 rounded mb-2">
              <h4 className="font-bold">{note.title}</h4>
              <p>{note.content}</p>
              <span className="text-sm text-gray-500">{note.createdAt}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreateNote;
