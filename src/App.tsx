import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { JobList } from './pages/JobList';
import { JobDetails } from './pages/JobDetails';
import { JobAlerts } from './pages/JobAlerts';
import { Blog } from './pages/Blog';
import { AdminDashboard } from './pages/admin/Dashboard';
import { AdminApplications } from './pages/admin/Applications';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-blue-900 py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Find Your Dream Legal Career
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-blue-100">
            Discover opportunities at top law firms and legal departments across Germany
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/jobs/:id" element={<JobDetails />} />
            <Route path="/alerts" element={<JobAlerts />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/applications" element={<AdminApplications />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}