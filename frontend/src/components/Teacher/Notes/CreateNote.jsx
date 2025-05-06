import React, { useState } from "react";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
    setTitle("");
    setContent("");
  };

  const isSaveDisabled = !title.trim() || !content.trim();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Create New Note
          </h2>
          <div className="space-y-4">
            <input
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              type="text"
              placeholder="Enter note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
              rows="6"
              placeholder="Start writing your note here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button
              onClick={handleSave}
              disabled={isSaveDisabled}
              className={`w-full py-3 px-6 text-white font-medium rounded-lg transition-all ${
                isSaveDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Save Note
            </button>
          </div>
        </div>

        {savedNotes.length > 0 ? (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Saved Notes
            </h3>
            {savedNotes.map((note) => (
              <div
                key={note.id}
                className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-medium text-gray-800">
                    {note.title}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {note.createdAt}
                  </span>
                </div>
                <p className="text-gray-600 whitespace-pre-wrap">
                  {note.content}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No notes yet. Start writing!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNote;
