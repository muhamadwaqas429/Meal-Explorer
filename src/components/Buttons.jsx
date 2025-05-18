import React from "react";

const countries = [
  { name: "American", buttonName: "Explore America", color: "bg-blue-500" },
  { name: "French", buttonName: "Discover France", color: "bg-red-500" },
  { name: "Chinese", buttonName: "Explore Chinese", color: "bg-orange-500" },
  { name: "Turkish", buttonName: "Discover Turkish", color: "bg-teal-500" },
  { name: "Spanish", buttonName: "Visit Spain", color: "bg-yellow-500" },
  { name: "Japanese", buttonName: "Explore Japan", color: "bg-pink-500" },
  { name: "British", buttonName: "Visit Britain", color: "bg-purple-500" }
];

const Buttons = ({ setArea }) => {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {countries.map((data, i) => (
        <button
          key={i}
          className={`${data.color} text-white px-5 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300`}
          onClick={() => setArea(data.name)}  // Change the area when button clicked
        >
          {data.buttonName}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
