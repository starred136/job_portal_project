import React from 'react';
import { useParams } from 'react-router-dom';
import { Building2, MapPin, Euro, Clock, Briefcase, Calendar } from 'lucide-react';
import { jobs } from '../lib/api';

export function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchJob = async () => {
      try {
        const { data } = await jobs.getById(id!);
        setJob(data);
      } catch (error) {
        console.error('Error fetching job:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Job not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <img
                  src={job.company.logo || 'https://picsum.photos/seed/company/200/200'}
                  alt={`${job.company.name} logo`}
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Building2 className="mr-1 h-4 w-4" />
                      {job.company.name}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-1 h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Euro className="mr-1 h-4 w-4" />
                      {job.salary.min}-{job.salary.max} {job.salary.currency}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {job.type}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900">Job Description</h2>
                <div className="mt-4 prose prose-blue">{job.description}</div>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900">Requirements</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  {job.requirements.map((req: string, index: number) => (
                    <li key={index} className="text-gray-600">
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900">Responsibilities</h2>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  {job.responsibilities.map((resp: string, index: number) => (
                    <li key={index} className="text-gray-600">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">Apply for this position</h2>
              <button className="mt-4 w-full rounded-lg bg-blue-900 px-4 py-2 text-white hover:bg-blue-800">
                Apply Now
              </button>
              <button className="mt-2 w-full rounded-lg border border-blue-900 px-4 py-2 text-blue-900 hover:bg-blue-50">
                Save Job
              </button>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900">Job Overview</h2>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Posted Date</p>
                    <p className="text-sm text-gray-500">
                      {new Date(job.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-gray-400" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Experience Level</p>
                    <p className="text-sm text-gray-500">{job.experienceLevel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}