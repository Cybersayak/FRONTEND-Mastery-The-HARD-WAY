
import React from 'react'

function Card({ buttonName, color = "bg-blue-500" }) {
  // Map Tailwind color classes to actual CSS color values
  const colorMap = {
    "bg-blue-500": "#3b82f6",
    "bg-purple-600": "#9333ea",
    "bg-red-400": "#f87171",
    // Add more mappings as needed
  };

  // Use direct CSS for background color
  const buttonStyle = {
    backgroundColor: colorMap[color] || "#3b82f6" // Default to blue if color not found
  };

  return (
    <button 
      className="px-5 py-2 text-white"
      style={buttonStyle}
    >
      {buttonName}
    </button>
  );
}

export default Card