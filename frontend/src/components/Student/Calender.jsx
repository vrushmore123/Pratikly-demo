import React, { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (month, year) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysArray = [];

    // Fill in empty days for the start of the month
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(null);
    }

    // Fill in the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    return daysArray;
  };

  const handleDateClick = (day) => {
    if (day) {
      const newDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      setSelectedDate(newDate);
    }
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const daysInMonth = getDaysInMonth(
    currentDate.getMonth() + 1,
    currentDate.getFullYear()
  );

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevMonth}
          className="text-gray-700 hover:text-blue-500"
        >
          &lt;
        </button>
        <div className="text-lg font-semibold">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </div>
        <button
          onClick={handleNextMonth}
          className="text-gray-700 hover:text-blue-500"
        >
          &gt;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="font-semibold text-gray-600">
            {day}
          </div>
        ))}
        {daysInMonth.map((day, index) => (
          <div
            key={index}
            onClick={() => handleDateClick(day)}
            className={`p-2 cursor-pointer rounded-full ${
              day === null ? "" : "hover:bg-blue-100"
            } ${
              day === selectedDate?.getDate() ? "bg-blue-500 text-white" : ""
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {selectedDate && (
        <div className="mt-4 text-center text-gray-700">
          <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default Calendar;
