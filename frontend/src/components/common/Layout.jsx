// src/components/common/Layout.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8 text-blue-400">SeniorGuard</h2>
        <nav className="space-y-4">
          <Link to="/" className="block hover:text-blue-300">Dashboard</Link>
          <Link to="/alerts" className="block hover:text-blue-300">Alerts</Link>
          <Link to="/profile" className="block hover:text-blue-300">Profile</Link>
          <Link to="/settings" className="block hover:text-blue-300">Settings</Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white shadow-sm flex items-center px-8">
          <h1 className="text-lg font-semibold text-gray-700">Management System</h1>
        </header>
        
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet /> {/* This is where your page content will load */}
        </main>
      </div>
    </div>
  );
};

export default Layout;