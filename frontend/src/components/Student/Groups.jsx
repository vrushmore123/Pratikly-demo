import React, { useState } from 'react';

// Example group data
const groups = [
  {
    id: 1,
    name: "React Developers",
    description: "A group for React developers to share knowledge and resources.",
    members: 20,
    discussions: [
      { id: 1, message: "What’s the best state management library for React?" },
      { id: 2, message: "How to optimize React rendering?" },
    ],
  },
  {
    id: 2,
    name: "Web Designers",
    description: "A group for web designers to collaborate and discuss design trends.",
    members: 15,
    discussions: [
      { id: 1, message: "What’s your favorite tool for web design?" },
      { id: 2, message: "How to improve user experience in modern websites?" },
    ],
  },
  {
    id: 3,
    name: "Data Scientists",
    description: "A group for data scientists to share resources and discuss data trends.",
    members: 12,
    discussions: [
      { id: 1, message: "What’s the best Python library for data analysis?" },
      { id: 2, message: "How do you stay updated on the latest trends in data science?" },
    ],
  },
];

const Groups = () => {
  const [joinedGroups, setJoinedGroups] = useState([]);

  const handleJoinGroup = (groupId) => {
    if (!joinedGroups.includes(groupId)) {
      setJoinedGroups([...joinedGroups, groupId]);
    }
  };

  const handleLeaveGroup = (groupId) => {
    setJoinedGroups(joinedGroups.filter(id => id !== groupId));
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-8">Join or Leave a Group</h2>
      <div className="space-y-6">
        {groups.map(group => (
          <div key={group.id} className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold">{group.name}</h3>
                <p className="text-sm text-gray-500">{group.description}</p>
              </div>
              <div className="text-sm text-gray-600">
                <span>{group.members} Members</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700">Group Discussions:</h4>
              <ul className="space-y-2">
                {group.discussions.map((discussion) => (
                  <li key={discussion.id} className="text-gray-600">{discussion.message}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center">
              {joinedGroups.includes(group.id) ? (
                <button
                  onClick={() => handleLeaveGroup(group.id)}
                  className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600"
                >
                  Leave Group
                </button>
              ) : (
                <button
                  onClick={() => handleJoinGroup(group.id)}
                  className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600"
                >
                  Join Group
                </button>
              )}
              <button className="bg-gray-500 text-white py-1 px-4 rounded-lg hover:bg-gray-600">
                View Discussions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
