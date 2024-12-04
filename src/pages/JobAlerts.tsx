import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Bell, Plus, Trash2 } from 'lucide-react';

export function JobAlerts() {
  const { user } = useAuth();
  const [alerts, setAlerts] = React.useState([]);
  const [showForm, setShowForm] = React.useState(false);
  const [newAlert, setNewAlert] = React.useState({
    keywords: '',
    locations: '',
    frequency: 'weekly',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implementation for adding new alert
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="h-6 w-6 text-blue-900" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Job Alerts</h1>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center rounded-lg bg-blue-900 px-4 py-2 text-white hover:bg-blue-800"
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Alert
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Keywords</label>
                <input
                  type="text"
                  value={newAlert.keywords}
                  onChange={(e) => setNewAlert({ ...newAlert, keywords: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="e.g., Legal Intern, Corporate Law"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Locations</label>
                <input
                  type="text"
                  value={newAlert.locations}
                  onChange={(e) => setNewAlert({ ...newAlert, locations: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="e.g., Berlin, Munich"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Frequency</label>
                <select
                  value={newAlert.frequency}
                  onChange={(e) => setNewAlert({ ...newAlert, frequency: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-900 px-4 py-2 text-white hover:bg-blue-800"
              >
                Save Alert
              </button>
            </form>
          )}

          <div className="mt-6 space-y-4">
            {alerts.map((alert: any) => (
              <div
                key={alert.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{alert.keywords.join(', ')}</h3>
                  <p className="text-sm text-gray-500">
                    {alert.locations.join(', ')} • {alert.frequency}
                  </p>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}