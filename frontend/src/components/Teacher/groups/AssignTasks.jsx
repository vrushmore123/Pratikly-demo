import React, { useState } from "react";
import {
  Clipboard,
  Plus,
  Tag,
  FileText,
  Clock,
  CheckCircle,
  Calendar,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const teams = ["Team Alpha", "Team Beta", "Team Gamma"];
const priorities = ["Low", "Medium", "High", "Urgent"];

export default function AssignTasks() {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [assignedTasks, setAssignedTasks] = useState([]);
  const [expandedTasks, setExpandedTasks] = useState({});
  const [filters, setFilters] = useState({ team: "All", priority: "All" });

  const handleAssign = () => {
    if (!selectedTeam || !taskTitle.trim()) return;

    const newTask = {
      id: Date.now(),
      team: selectedTeam,
      title: taskTitle,
      description,
      priority,
      dueDate,
      createdAt: new Date().toLocaleDateString(),
      status: "Pending",
    };

    setAssignedTasks([...assignedTasks, newTask]);
    setTaskTitle("");
    setDescription("");
    // Keep the selected team for faster task creation
    setPriority("Medium");
    setDueDate("");

    // Auto-expand newly created task
    setExpandedTasks((prev) => ({ ...prev, [newTask.id]: true }));
  };

  const toggleTaskExpand = (taskId) => {
    setExpandedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  const deleteTask = (taskId) => {
    setAssignedTasks(assignedTasks.filter((task) => task.id !== taskId));
    // Remove from expanded state
    const updatedExpanded = { ...expandedTasks };
    delete updatedExpanded[taskId];
    setExpandedTasks(updatedExpanded);
  };

  const toggleTaskStatus = (taskId) => {
    setAssignedTasks(
      assignedTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === "Completed" ? "Pending" : "Completed",
            }
          : task
      )
    );
  };

  // Filter tasks based on selected filters
  const filteredTasks = assignedTasks.filter((task) => {
    const teamMatch = filters.team === "All" || task.team === filters.team;
    const priorityMatch =
      filters.priority === "All" || task.priority === filters.priority;
    return teamMatch && priorityMatch;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "Low":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-blue-100 text-blue-800";
      case "High":
        return "bg-orange-100 text-orange-800";
      case "Urgent":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2 flex items-center gap-2">
        <Clipboard size={24} className="text-blue-600" /> Task Assignment
      </h2>

      {/* Task Creation Form */}
      <div className="mb-8 bg-gray-50 p-5 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium mb-4 text-gray-700">
          Create New Task
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Team *
            </label>
            <select
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
            >
              <option value="">-- Select Team --</option>
              {teams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Task Title *
            </label>
            <input
              type="text"
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter task title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Priority
            </label>
            <select
              className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              {priorities.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Due Date
            </label>
            <div className="relative">
              <input
                type="date"
                className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <Calendar
                size={16}
                className="absolute right-3 top-3 text-gray-400 pointer-events-none"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Description
          </label>
          <textarea
            className="border border-gray-300 px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            rows={3}
            placeholder="Enter task details..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          onClick={handleAssign}
          disabled={!selectedTeam || !taskTitle.trim()}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-white transition-colors ${
            !selectedTeam || !taskTitle.trim()
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          <Plus size={18} /> Assign Task
        </button>
      </div>

      {/* Task List */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium text-gray-800 flex items-center gap-2">
            <FileText size={20} /> Assigned Tasks
          </h3>

          {/* Filters */}
          <div className="flex gap-2">
            <select
              className="border border-gray-300 px-2 py-1 rounded-md text-sm"
              value={filters.team}
              onChange={(e) => setFilters({ ...filters, team: e.target.value })}
            >
              <option value="All">All Teams</option>
              {teams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>

            <select
              className="border border-gray-300 px-2 py-1 rounded-md text-sm"
              value={filters.priority}
              onChange={(e) =>
                setFilters({ ...filters, priority: e.target.value })
              }
            >
              <option value="All">All Priorities</option>
              {priorities.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        {assignedTasks.length === 0 ? (
          <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            No tasks assigned yet. Create your first task using the form above.
          </div>
        ) : filteredTasks.length === 0 ? (
          <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
            No tasks match the selected filters.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                className={`border rounded-lg overflow-hidden bg-white shadow-sm transition-colors ${
                  task.status === "Completed"
                    ? "border-green-200 bg-green-50"
                    : "border-gray-200"
                }`}
              >
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <button
                      onClick={() => toggleTaskStatus(task.id)}
                      className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center ${
                        task.status === "Completed"
                          ? "bg-green-100 border-green-500 text-green-500"
                          : "border-gray-300 text-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {task.status === "Completed" && <CheckCircle size={16} />}
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4
                          className={`font-semibold ${
                            task.status === "Completed"
                              ? "line-through text-gray-500"
                              : "text-gray-800"
                          }`}
                        >
                          {task.title}
                        </h4>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${getPriorityColor(
                            task.priority
                          )}`}
                        >
                          {task.priority}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-1">
                        <span className="flex items-center gap-1">
                          <Tag size={14} />
                          {task.team}
                        </span>
                        {task.dueDate && (
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            Due: {task.dueDate}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          Created: {task.createdAt}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleTaskExpand(task.id)}
                      className="text-gray-500 hover:text-gray-700 p-1"
                    >
                      {expandedTasks[task.id] ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-gray-400 hover:text-red-500 p-1"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {expandedTasks[task.id] && task.description && (
                  <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <h5 className="text-sm font-medium text-gray-700 mb-2">
                      Description:
                    </h5>
                    <p className="text-gray-600 whitespace-pre-line">
                      {task.description}
                    </p>
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
