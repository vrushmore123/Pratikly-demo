import React, { useState } from 'react';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState('');

  const handlePost = () => {
    if (!newAnnouncement.trim()) return;
    const newEntry = {
      id: Date.now(),
      text: newAnnouncement,
      date: new Date().toLocaleString(),
    };
    setAnnouncements([newEntry, ...announcements]);
    setNewAnnouncement('');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Announcements</h2>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Write your announcement..."
          value={newAnnouncement}
          onChange={(e) => setNewAnnouncement(e.target.value)}
        />
        <button
          onClick={handlePost}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Post Announcement
        </button>
      </div>
      <ul>
        {announcements.map((a) => (
          <li key={a.id} className="bg-gray-100 p-3 mb-2 rounded shadow-sm">
            <p>{a.text}</p>
            <span className="text-sm text-gray-500">{a.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
