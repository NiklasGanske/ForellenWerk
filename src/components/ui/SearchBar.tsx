import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      {!isOpen && (
        <button
          onClick={toggleSearch}
          className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FiSearch className="w-6 h-6 text-gray-600" />
        </button>
      )}
      {isOpen && (
        <div className="absolute right-0 flex items-center">
          <input
            type="text"
            placeholder="Suchen..."
            className="w-64 px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
