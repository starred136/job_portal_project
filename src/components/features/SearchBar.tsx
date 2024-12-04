import React from 'react';
import { Search, MapPin } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="flex w-full max-w-4xl flex-col gap-4 sm:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Job title or keyword"
          className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="City or location"
          className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>
      
      <button className="rounded-lg bg-blue-900 px-6 py-3 text-white hover:bg-blue-800 sm:px-8">
        Search Jobs
      </button>
    </div>
  );
}