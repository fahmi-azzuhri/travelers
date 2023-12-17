// src/App.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function PickerDate() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="w-30">
      <p className="text-sm text-gray-900 pr-44">Date</p>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText="Select a date"
        className="mt-1 block w-26 p-2 border border-gray-500 rounded-md shadow-sm me-2 focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
}

export default PickerDate;
