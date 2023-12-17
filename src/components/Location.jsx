// src/App.js
import React, { useState } from "react";

function Location() {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-28">
      <p className="text-sm text-gray-900 me-16"> Location</p>
      <select
        value={selectedOption}
        onChange={handleChange}
        className="mt-1 block w-26 p-2 text-center border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="" disabled className=""></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Location;
