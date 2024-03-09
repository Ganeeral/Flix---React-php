"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react'; // Импортируем иконку поиска

const SearchBar: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="relative">
      {/* Иконка поиска */}
      <button onClick={toggleSearch} className="absolute top-0 right-0 p-2">
        <Search className="h-6 w-6 text-gray-500" />
      </button>

      {/* Поле ввода поиска (появляется при открытии поиска) */}
      {isSearchOpen && (
        <input
          type="text"
          placeholder="Search..."
          className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:border-blue-500"
        />
      )}
    </div>
  );
};

export default SearchBar;