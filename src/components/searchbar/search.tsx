"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import SearchIcon from "@/ui/icons/SearchIcon.svg";
import { words } from "../lib/data";
const SearchBar = () => {
  const [activeSearch, setActiveSearch] = useState([])
  const handleSearch = (e) => {
    if(e.target.value == ''){
      setActiveSearch([])
      return false
    }
    setActiveSearch (words.filter(w=> w.includes(e.target.value)).slice(0,8))
  }
  return (
    <form className="w-[500px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Поиск.."
          className="w-full p-4 rounded-[30px] bg-slate-800"
          onChange={(e) => handleSearch(e)}
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full">
          <SearchIcon />
        </button>
      </div>

      {
        activeSearch.length > 0 &&(
      <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
        {
          activeSearch.map(s => (
            <span>{s}</span>
          ))
        }
      </div>

        )
      }

    </form>
  );
};

export default SearchBar;
