import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Users, Briefcase, FileText, TrendingUp } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, change }: any) => (
  <div className="rounded-lg border bg-white p-6 shadow-sm">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <div className="rounded-full bg-blue-50 p-3">
        <Icon className="h-6 w-6 text-blue-900" />
      </div>
    </div>
    {change && (
      <div className="mt-4 flex items-center text-sm">
        <TrendingUp className="mr-1 h-4 w-4 text-green-500" />
        <span className="text-green-500">{change}% increase</span>
        <span className="ml-1 text-gray-600">from last month</span>
      </div>
    )}
  </div>
);

export function AdminDashboard() {
  const { user } = useAuth();

  if (!user || user.role !== 'admin') {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-gray-600">Access denied. Admin privileges required.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={Users}
            label="Total Users"
            value="2,431"
            change={12}
          />
          <StatCard
            icon={Briefcase}
            label="Active Jobs"
            value="156"
            change={8}
          />
          <StatCard
            icon={FileText}
            label="Applications"
            value="843"
            change={24}
          />
          <StatCard
            icon={Users}
            label="New Companies"
            value="34"
            change={16}
          />
        </div>

        {/* Recent Activity */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
            <div className="mt-4 divide-y">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-gray-900">Legal Intern Application</p>
                    <p className="text-sm text-gray-500">by John Doe • 2 hours ago</p>
                  </div>
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                    Pending
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">New Job Postings</h2>
            <div className="mt-4 divide-y">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium text-gray-900">Corporate Lawyer</p>
                    <p className="text-sm text-gray-500">by Legal Corp • 3 hours ago</p>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                    Active
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}