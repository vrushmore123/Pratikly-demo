import React, { useState } from "react";
import {
  Users,
  Plus,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  UserCheck,
  User,
} from "lucide-react";

const students = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank"];

export default function CreateTeams() {
  const [teamName, setTeamName] = useState("");
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [teams, setTeams] = useState([]);
  const [expandedTeams, setExpandedTeams] = useState({});
  const [showStudentSelector, setShowStudentSelector] = useState(true);

  const handleCheckboxChange = (student) => {
    setSelectedStudents((prev) =>
      prev.includes(student)
        ? prev.filter((s) => s !== student)
        : [...prev, student]
    );
  };

  const handleCreateTeam = () => {
    if (!teamName.trim() || selectedStudents.length === 0) return;

    const newTeam = {
      id: Date.now(),
      name: teamName,
      members: selectedStudents,
    };

    setTeams([...teams, newTeam]);
    setTeamName("");
    setSelectedStudents([]);

    // Auto-expand the newly created team
    setExpandedTeams((prev) => ({ ...prev, [newTeam.id]: true }));
  };

  const toggleTeamExpand = (teamId) => {
    setExpandedTeams((prev) => ({
      ...prev,
      [teamId]: !prev[teamId],
    }));
  };

  const toggleStudentSelector = () => {
    setShowStudentSelector(!showStudentSelector);
  };

  const selectAllStudents = () => {
    setSelectedStudents([...students]);
  };

  const clearSelectedStudents = () => {
    setSelectedStudents([]);
  };

  const deleteTeam = (teamId) => {
    setTeams(teams.filter((team) => team.id !== teamId));
    // Remove from expanded state
    const updatedExpanded = { ...expandedTeams };
    delete updatedExpanded[teamId];
    setExpandedTeams(updatedExpanded);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 flex items-center gap-2">
        <Users size={24} className="text-blue-600" /> Create Teams
      </h2>

      {/* Team Creation Form */}
      <div className="mb-8 bg-gray-50 p-5 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium mb-4 text-gray-700">New Team</h3>

        <div className="mb-4">
          <label
            htmlFor="teamName"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Team Name
          </label>
          <input
            id="teamName"
            type="text"
            placeholder="Enter team name"
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleCreateTeam()}
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-medium text-gray-700 flex items-center gap-1">
              <UserCheck size={18} />
              <span>Select Students</span>
              <span className="ml-2 text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                {selectedStudents.length} selected
              </span>
            </h4>
            <button
              onClick={toggleStudentSelector}
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
            >
              {showStudentSelector ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
              <span className="ml-1">
                {showStudentSelector ? "Hide" : "Show"}
              </span>
            </button>
          </div>

          {showStudentSelector && (
            <>
              <div className="mb-2 flex justify-end space-x-2 text-sm">
                <button
                  onClick={selectAllStudents}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Select All
                </button>
                <button
                  onClick={clearSelectedStudents}
                  className="text-gray-600 hover:text-gray-800"
                >
                  Clear
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 bg-white p-3 rounded-md border border-gray-200">
                {students.map((student) => (
                  <label
                    key={student}
                    className={`flex items-center gap-2 p-2 rounded cursor-pointer hover:bg-gray-50 ${
                      selectedStudents.includes(student)
                        ? "bg-blue-50 border border-blue-200"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-center w-5 h-5">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedStudents.includes(student)}
                        onChange={() => handleCheckboxChange(student)}
                      />
                      {selectedStudents.includes(student) ? (
                        <Check size={16} className="text-blue-600" />
                      ) : (
                        <div className="w-4 h-4 border border-gray-300 rounded"></div>
                      )}
                    </div>
                    <span className="flex items-center gap-1">
                      <User size={14} className="text-gray-400" />
                      {student}
                    </span>
                  </label>
                ))}
              </div>
            </>
          )}
        </div>

        <button
          onClick={handleCreateTeam}
          disabled={!teamName.trim() || selectedStudents.length === 0}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-white transition-colors ${
            !teamName.trim() || selectedStudents.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          <Plus size={18} /> Create Team
        </button>
      </div>

      {/* Team List */}
      <div>
        <h3 className="text-xl font-medium mb-4 text-gray-800 flex items-center gap-2">
          <Users size={20} /> Created Teams
        </h3>

        {teams.length === 0 ? (
          <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            No teams created yet. Use the form above to create your first team.
          </div>
        ) : (
          <div className="space-y-4">
            {teams.map((team) => (
              <div
                key={team.id}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <div className="bg-gray-50 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleTeamExpand(team.id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      {expandedTeams[team.id] ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                    <h4 className="font-semibold text-lg text-gray-800">
                      {team.name}
                    </h4>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      {team.members.length}{" "}
                      {team.members.length === 1 ? "member" : "members"}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTeam(team.id)}
                    className="text-red-500 hover:text-red-600 p-1 rounded-md hover:bg-red-50"
                  >
                    <X size={18} />
                  </button>
                </div>

                {expandedTeams[team.id] && (
                  <div className="p-4">
                    <h5 className="text-sm font-medium text-gray-600 mb-2">
                      Team Members:
                    </h5>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {team.members.map((member) => (
                        <div
                          key={member}
                          className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-md border border-gray-200"
                        >
                          <User size={16} className="text-gray-500" />
                          <span>{member}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
