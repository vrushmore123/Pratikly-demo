import React, { useEffect, useState } from "react";
import {
  BookOpenIcon,
  DocumentTextIcon,
  CalendarDaysIcon,
  TagIcon,
  PencilIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

const AllNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Simulated fetch call with enhanced data
    const fetchedNotes = [
      {
        id: 1,
        title: "Algebra Fundamentals",
        content:
          "Comprehensive guide to algebraic equations and geometric proofs",
        category: "Mathematics",
        date: "2024-03-15",
        status: "Published",
        wordCount: 1500,
      },
      {
        id: 2,
        title: "Photosynthesis Process",
        content:
          "Detailed explanation of light-dependent reactions and Calvin cycle",
        category: "Biology",
        date: "2024-03-14",
        status: "Draft",
        wordCount: 920,
      },
      {
        id: 3,
        title: "Modern History Timeline",
        content: "Key events from 20th century world history",
        category: "History",
        date: "2024-03-13",
        status: "Archived",
        wordCount: 2100,
      },
    ];
    setNotes(fetchedNotes);
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-6">
        <BookOpenIcon className="w-8 h-8 text-indigo-600" />
        <h2 className="text-2xl font-semibold text-gray-800">All Notes</h2>
      </div>

      {notes.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No notes found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <DocumentTextIcon className="w-6 h-6 text-indigo-500 mt-1" />
                <span
                  className={`text-sm px-2 py-1 rounded-full ${
                    note.status === "Published"
                      ? "bg-green-100 text-green-800"
                      : note.status === "Draft"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {note.status}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {note.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {note.content}
              </p>

              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <TagIcon className="w-4 h-4" />
                  <span>{note.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDaysIcon className="w-4 h-4" />
                  <span>{new Date(note.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <PencilIcon className="w-4 h-4" />
                  <span>{note.wordCount.toLocaleString()} words</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-end gap-3">
                <button className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                  <EyeIcon className="w-4 h-4" />
                  <span className="text-sm">View</span>
                </button>
                <button className="text-gray-600 hover:text-gray-800 flex items-center gap-1">
                  <PencilIcon className="w-4 h-4" />
                  <span className="text-sm">Edit</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllNotes;
