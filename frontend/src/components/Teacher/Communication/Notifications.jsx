import React, { useEffect, useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulated notification fetch
    const fetchedNotifications = [
      { id: 1, message: 'Student Alice submitted Assignment 1.', time: '2025-05-03 9:00 AM' },
      { id: 2, message: 'New announcement posted.', time: '2025-05-02 3:30 PM' },
    ];
    setNotifications(fetchedNotifications);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      {notifications.length === 0 ? (
        <p>No new notifications.</p>
      ) : (
        <ul className="space-y-3">
          {notifications.map((note) => (
            <li key={note.id} className="bg-yellow-100 p-3 rounded shadow-sm">
              <p>{note.message}</p>
              <span className="text-sm text-gray-600">{note.time}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
