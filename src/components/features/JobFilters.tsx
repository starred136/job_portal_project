import React from 'react';
import { Briefcase, MapPin, Euro, Clock } from 'lucide-react';

interface FilterProps {
  filters: {
    type: string[];
    location: string[];
    salary: string[];
    experience: string[];
  };
  setFilters: (filters: any) => void;
}

export function JobFilters({ filters, setFilters }: FilterProps) {
  const handleFilterChange = (category: string, value: string) => {
    setFilters((prev: any) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item: string) => item !== value)
        : [...prev[category], value],
    }));
  };

  return (
    <div className="space-y-6 rounded-lg border bg-white p-6">
      <div>
        <h3 className="flex items-center text-lg font-semibold text-gray-900">
          <Briefcase className="mr-2 h-5 w-5" />
          Job Type
        </h3>
        <div className="mt-4 space-y-2">
          {['Full-time', 'Part-time', 'Internship', 'Temporary'].map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.type.includes(type)}
                onChange={() => handleFilterChange('type', type)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className="ml-2 text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="flex items-center text-lg font-semibold text-gray-900">
          <MapPin className="mr-2 h-5 w-5" />
          Location
        </h3>
        <div className="mt-4 space-y-2">
          {['Berlin', 'Munich', 'Hamburg', 'Frankfurt'].map((location) => (
            <label key={location} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.location.includes(location)}
                onChange={() => handleFilterChange('location', location)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className="ml-2 text-gray-700">{location}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="flex items-center text-lg font-semibold text-gray-900">
          <Euro className="mr-2 h-5 w-5" />
          Salary Range
        </h3>
        <div className="mt-4 space-y-2">
          {['0-30k', '30k-50k', '50k-80k', '80k+'].map((range) => (
            <label key={range} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.salary.includes(range)}
                onChange={() => handleFilterChange('salary', range)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className="ml-2 text-gray-700">{range}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="flex items-center text-lg font-semibold text-gray-900">
          <Clock className="mr-2 h-5 w-5" />
          Experience Level
        </h3>
        <div className="mt-4 space-y-2">
          {['Entry Level', 'Mid Level', 'Senior Level'].map((level) => (
            <label key={level} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.experience.includes(level)}
                onChange={() => handleFilterChange('experience', level)}
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className="ml-2 text-gray-700">{level}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}