import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import FamilySidebar from "../familymember/FamilySidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50">
      
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <FamilySidebar />
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />

          <div className="fixed left-0 top-0 z-50">
            <FamilySidebar />
          </div>
        </>
      )}

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

          <div>
            <h1 className="font-semibold text-slate-800">
              Family Caregiver Dashboard
            </h1>

            <p className="hidden md:block text-sm text-slate-500">
              Monitor and support your loved ones
            </p>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              🟢 Active
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default Layout;