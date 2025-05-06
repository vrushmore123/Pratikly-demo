import React, { useState } from "react";
import {
  Plus,
  Trash2,
  UserPlus,
  X,
  Edit,
  Save,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const initialGroups = [
  { id: 1, name: "Group A", members: ["Alice", "Bob"] },
  { id: 2, name: "Group B", members: ["Charlie", "David"] },
];

export default function ManageGroups() {
  const [groups, setGroups] = useState(initialGroups);
  const [groupName, setGroupName] = useState("");
  const [newMemberName, setNewMemberName] = useState("");
  const [expandedGroups, setExpandedGroups] = useState({});
  const [editingGroup, setEditingGroup] = useState(null);
  const [editName, setEditName] = useState("");

  const handleAddGroup = () => {
    if (!groupName.trim()) return;

    const newGroup = {
      id: Date.now(),
      name: groupName,
      members: [],
    };
    setGroups([...groups, newGroup]);
    setGroupName("");
    // Auto-expand the newly created group
    setExpandedGroups((prev) => ({ ...prev, [newGroup.id]: true }));
  };

  const handleDeleteGroup = (id) => {
    setGroups(groups.filter((group) => group.id !== id));
    // Remove from expanded state
    const updatedExpanded = { ...expandedGroups };
    delete updatedExpanded[id];
    setExpandedGroups(updatedExpanded);
  };

  const handleAddMember = (groupId) => {
    if (!newMemberName.trim()) return;

    setGroups((prev) =>
      prev.map((group) =>
        group.id === groupId
          ? { ...group, members: [...group.members, newMemberName] }
          : group
      )
    );
    setNewMemberName("");
  };

  const handleRemoveMember = (groupId, memberName) => {
    setGroups((prev) =>
      prev.map((group) =>
        group.id === groupId
          ? {
              ...group,
              members: group.members.filter((m) => m !== memberName),
            }
          : group
      )
    );
  };

  const toggleGroupExpand = (groupId) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  const startEditingGroup = (group) => {
    setEditingGroup(group.id);
    setEditName(group.name);
  };

  const saveGroupName = (groupId) => {
    if (!editName.trim()) return;

    setGroups((prev) =>
      prev.map((group) =>
        group.id === groupId ? { ...group, name: editName } : group
      )
    );
    setEditingGroup(null);
  };

  return (
    <div className="max-w-3xl items-start mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
        Group Management
      </h2>

      {/* Add New Group */}
      <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium mb-3 text-gray-700">
          Create New Group
        </h3>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Enter group name"
            className="flex-1 border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddGroup()}
          />
          <button
            onClick={handleAddGroup}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 whitespace-nowrap"
          >
            <Plus size={18} /> Add Group
          </button>
        </div>
      </div>

      {/* List of Groups */}
      {groups.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No groups yet. Create your first group above.
        </div>
      ) : (
        <div className="space-y-4">
          {groups.map((group) => (
            <div
              key={group.id}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
            >
              {/* Group Header */}
              <div className="bg-gray-50 p-4 flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <button
                    onClick={() => toggleGroupExpand(group.id)}
                    className="mr-2 text-gray-500 hover:text-gray-700"
                  >
                    {expandedGroups[group.id] ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>

                  {editingGroup === group.id ? (
                    <div className="flex-1 flex gap-2">
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="border-b border-gray-300 bg-transparent px-1 py-1 flex-1 focus:outline-none focus:border-blue-500"
                        autoFocus
                      />
                      <button
                        onClick={() => saveGroupName(group.id)}
                        className="text-green-600 hover:text-green-700"
                      >
                        <Save size={18} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 flex-1">
                      <h3 className="font-semibold text-lg text-gray-800">
                        {group.name}
                      </h3>
                      <button
                        onClick={() => startEditingGroup(group)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <Edit size={16} />
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {group.members.length}{" "}
                    {group.members.length === 1 ? "member" : "members"}
                  </span>
                  <button
                    onClick={() => handleDeleteGroup(group.id)}
                    className="text-red-500 hover:text-red-600 p-1 rounded-md hover:bg-red-50"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              {/* Member Management - Only shown when expanded */}
              {expandedGroups[group.id] && (
                <div className="p-4 border-t border-gray-200">
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Enter member name"
                        className="flex-1 border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        value={newMemberName}
                        onChange={(e) => setNewMemberName(e.target.value)}
                        onKeyPress={(e) =>
                          e.key === "Enter" && handleAddMember(group.id)
                        }
                      />
                      <button
                        onClick={() => handleAddMember(group.id)}
                        className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-1"
                      >
                        <UserPlus size={18} /> Add
                      </button>
                    </div>
                  </div>

                  {group.members.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {group.members.map((member) => (
                        <div
                          key={member}
                          className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-md px-3 py-2 group"
                        >
                          <span className="font-medium">{member}</span>
                          <button
                            onClick={() => handleRemoveMember(group.id, member)}
                            className="text-gray-400 group-hover:text-red-500 transition-colors"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-4 text-gray-500 bg-gray-50 rounded-md">
                      No members in this group yet
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
