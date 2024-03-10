"use client";

import React, { useState } from "react";
import SearchIcon from "@/ui/icons/SearchIcon.svg";
import { words } from "../lib/data";

const SearchBar = () => {
  const [activeSearch, setActiveSearch] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue === '') {
      setActiveSearch([]);
      return;
    }
    setActiveSearch(words.filter(word => word.toLowerCase().includes(searchValue)).slice(0, 8));
  }

  return (
    <form className="w-[500px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Поиск.."
          className="w-full p-4 rounded-[30px] bg-slate-800 text-white"
          onChange={handleSearch}
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full">
          <SearchIcon />
        </button>
      </div>

      {activeSearch.length > 0 && (
        <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
          {activeSearch.map((searchItem, index) => (
            <span key={index}>{searchItem}</span>
          ))}
        </div>
      )}
    </form>
  );
};

export default SearchBar;
