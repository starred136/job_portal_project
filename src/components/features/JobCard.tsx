import React from 'react';
import { Building2, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  postedAt: string;
  logo: string;
}

export function JobCard({ id, title, company, location, type, postedAt, logo }: JobCardProps) {
  return (
    <Link to={`/jobs/${id}`} className="block">
      <div className="rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-start gap-4">
          <img
            src={logo}
            alt={`${company} logo`}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <div className="mt-1 flex flex-wrap gap-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Building2 className="mr-1 h-4 w-4" />
                {company}
              </div>
              <div className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                {location}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {postedAt}
              </div>
            </div>
            <div className="mt-3">
              <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                {type}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}