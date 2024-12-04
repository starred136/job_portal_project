import React from 'react';
import { JobCard } from '../components/features/JobCard';
import { JobFilters } from '../components/features/JobFilters';
import { SearchBar } from '../components/features/SearchBar';
import { jobs } from '../lib/api';

export function JobList() {
  const [jobListings, setJobListings] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [filters, setFilters] = React.useState({
    type: [],
    location: [],
    salary: [],
    experience: [],
  });

  React.useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await jobs.getAll({ filters });
        setJobListings(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-3xl font-bold text-white">Find Your Perfect Legal Job</h1>
          <div className="mt-8">
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Filters */}
          <div className="lg:col-span-1">
            <JobFilters filters={filters} setFilters={setFilters} />
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : (
              <div className="space-y-6">
                {jobListings.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}