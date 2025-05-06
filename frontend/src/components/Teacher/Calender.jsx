// src/teacher/Calendar.jsx
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// You can replace this with real data fetched from an API
const classEvents = [
  {
    id: 1,
    title: "Math - Class 10",
    start: new Date(2025, 4, 6, 10, 0),  // May 6, 2025, 10:00 AM
    end: new Date(2025, 4, 6, 11, 0),
  },
  {
    id: 2,
    title: "Science - Class 9",
    start: new Date(2025, 4, 6, 12, 0),
    end: new Date(2025, 4, 6, 13, 0),
  },
  {
    id: 3,
    title: "English - Class 8",
    start: new Date(2025, 4, 7, 9, 0),
    end: new Date(2025, 4, 7, 10, 0),
  },
];

const localizer = momentLocalizer(moment);

const TeacherCalendar = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Teacher's Class Schedule</h2>
      <Calendar
        localizer={localizer}
        events={classEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        views={["month", "week", "day"]}
        defaultView="week"
      />
    </div>
  );
};

export default TeacherCalendar;
