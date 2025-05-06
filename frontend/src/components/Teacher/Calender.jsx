import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const classEvents = [
  {
    id: 1,
    title: "Math - Class 10",
    start: new Date(2025, 4, 6, 10, 0),
    end: new Date(2025, 4, 6, 11, 0),
    type: "math",
  },
  {
    id: 2,
    title: "Science - Class 9",
    start: new Date(2025, 4, 6, 12, 0),
    end: new Date(2025, 4, 6, 13, 0),
    type: "science",
  },
  {
    id: 3,
    title: "English - Class 8",
    start: new Date(2025, 4, 7, 9, 0),
    end: new Date(2025, 4, 7, 10, 0),
    type: "english",
  },
];

const localizer = momentLocalizer(moment);

const eventTypeColors = {
  math: { bg: "bg-blue-100", border: "border-l-4 border-blue-500" },
  science: { bg: "bg-green-100", border: "border-l-4 border-green-500" },
  english: { bg: "bg-purple-100", border: "border-l-4 border-purple-500" },
};

const TeacherCalendar = () => {
  const eventStyleGetter = (event) => {
    const { bg, border } = eventTypeColors[event.type] || {};
    return {
      className: `${bg} ${border} p-2 rounded shadow-sm hover:shadow-md transition-shadow`,
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Class Schedule Calendar
            </h2>
            <div className="flex gap-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
                <span className="text-sm text-gray-600">Math</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                <span className="text-sm text-gray-600">Science</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                <span className="text-sm text-gray-600">English</span>
              </div>
            </div>
          </div>

          <Calendar
            localizer={localizer}
            events={classEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 700 }}
            views={["month", "week", "day", "agenda"]}
            defaultView="week"
            eventPropGetter={eventStyleGetter}
            components={{
              toolbar: (props) => (
                <div className="mb-4 flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                  <div className="flex gap-2">
                    <button
                      onClick={() => props.onNavigate("PREV")}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => props.onNavigate("NEXT")}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded"
                    >
                      Next →
                    </button>
                  </div>
                  <span className="text-lg font-semibold text-gray-700">
                    {props.label}
                  </span>
                  <div className="flex gap-2">
                    {props.views.map((view) => (
                      <button
                        key={view}
                        onClick={() => props.onView(view)}
                        className={`px-3 py-1 rounded ${
                          props.view === view
                            ? "bg-blue-500 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {view.charAt(0).toUpperCase() + view.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              ),
            }}
            dayPropGetter={() => ({
              className: "hover:bg-gray-50 transition-colors",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherCalendar;
