import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-4 text-sm text-gray-400">
              The leading job platform for law students and legal professionals in Germany.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/jobs" className="text-sm text-gray-400 hover:text-white">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-sm text-gray-400 hover:text-white">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm text-gray-400 hover:text-white">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/imprint" className="text-sm text-gray-400 hover:text-white">
                  Imprint
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} LegalJobs.de. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}