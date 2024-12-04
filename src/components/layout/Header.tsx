import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, BookOpen, Globe, LogIn, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-900" />
              <span className="text-xl font-bold text-blue-900">LegalJobs.de</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/jobs" className="text-gray-700 hover:text-blue-900">
              Jobs
            </Link>
            <Link to="/alerts" className="flex items-center text-gray-700 hover:text-blue-900">
              <Bell className="mr-1 h-4 w-4" />
              Job Alerts
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-900">
              Blog
            </Link>
            <button className="flex items-center text-gray-700 hover:text-blue-900">
              <Globe className="mr-1 h-4 w-4" />
              DE
            </button>
            
            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="flex items-center text-gray-700 hover:text-blue-900"
                  >
                    <LayoutDashboard className="mr-1 h-4 w-4" />
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="flex items-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center rounded-md bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800"
              >
                <LogIn className="mr-1 h-4 w-4" />
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}