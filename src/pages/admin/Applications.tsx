import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { applications } from '../../lib/api';
import { Check, X, Clock, User, Building2 } from 'lucide-react';

const StatusBadge = ({ status }: { status: string }) => {
  const styles = {
    pending: 'bg-yellow-100 text-yellow-800',
    reviewed: 'bg-blue-100 text-blue-800',
    shortlisted: 'bg-purple-100 text-purple-800',
    rejected: 'bg-red-100 text-red-800',
    accepted: 'bg-green-100 text-green-800',
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        styles[status as keyof typeof styles]
      }`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export function AdminApplications() {
  const { user } = useAuth();
  const [applicationList, setApplicationList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchApplications = async () => {
      try {
        const { data } = await applications.getAll();
        setApplicationList(data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      await applications.updateStatus(id, status);
      setApplicationList((prev: any) =>
        prev.map((app: any) =>
          app._id === id ? { ...app, status } : app
        )
      );
    } catch (error) {
      console.error('Error updating application status:', error);
    }
  };

  if (!user || user.role !== 'admin') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-600">Access denied. Admin privileges required.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900">Manage Applications</h1>

        <div className="mt-8 rounded-lg border bg-white shadow">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Applicant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Job
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Applied
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {applicationList.map((application: any) => (
                  <tr key={application._id}>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        <User className="mr-2 h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">
                            {application.applicant.firstName} {application.applicant.lastName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {application.applicant.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        <Building2 className="mr-2 h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">
                            {application.job.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {application.job.company}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <StatusBadge status={application.status} />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      {new Date(application.createdAt).toLocaleDateString()}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() =>
                            handleStatusUpdate(application._id, 'accepted')
                          }
                          className="rounded-full bg-green-100 p-2 text-green-600 hover:bg-green-200"
                        >
                          <Check className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() =>
                            handleStatusUpdate(application._id, 'rejected')
                          }
                          className="rounded-full bg-red-100 p-2 text-red-600 hover:bg-red-200"
                        >
                          <X className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() =>
                            handleStatusUpdate(application._id, 'pending')
                          }
                          className="rounded-full bg-yellow-100 p-2 text-yellow-600 hover:bg-yellow-200"
                        >
                          <Clock className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}