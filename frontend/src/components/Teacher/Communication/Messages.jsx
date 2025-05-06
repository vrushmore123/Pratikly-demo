import React, { useState } from 'react';

const Messages = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Student A', text: 'Can you help me with the homework?', timestamp: '2025-05-01 10:00 AM' },
    { id: 2, sender: 'You', text: 'Sure, let’s review it tomorrow.', timestamp: '2025-05-01 10:05 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: 'You',
      text: newMessage,
      timestamp: new Date().toLocaleString(),
    };
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Messages</h2>
      <div className="h-64 overflow-y-auto mb-4 bg-gray-50 border rounded p-3">
        {messages.map((msg) => (
          <div key={msg.id} className="mb-2">
            <p>
              <strong>{msg.sender}:</strong> {msg.text}
            </p>
            <p className="text-xs text-gray-500">{msg.timestamp}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Messages;
