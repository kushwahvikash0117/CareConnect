import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Import all three sidebars
import AdminSidebar from "../dashboard/AdminSidebar";
import FamilySidebar from "../dashboard/FamilySidebar";
import SeniorSidebar from "../dashboard/SeniorSidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Determine which sidebar to show based on the URL path
  const getSidebar = () => {
    if (location.pathname.startsWith("/adashboard")) return <AdminSidebar />;
    if (location.pathname.startsWith("/fdashboard")) return <FamilySidebar />;
    if (location.pathname.startsWith("/sdashboard")) return <SeniorSidebar />;
    return <FamilySidebar />; // Default fallback
  };

  // Helper to get titles
  const getHeaderInfo = () => {
    if (location.pathname.startsWith("/adashboard")) 
      return { title: "Admin Dashboard", sub: "System Management" };
    if (location.pathname.startsWith("/fdashboard")) 
      return { title: "Family Caregiver Dashboard", sub: "Monitor and support your loved ones" };
    return { title: "Senior Citizen Dashboard", sub: "Stay safe, healthy and connected" };
  };

  const { title, sub } = getHeaderInfo();

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        {getSidebar()}
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-0 z-50">{getSidebar()}</div>
        </>
      )}

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden text-2xl">☰</button>
          
          <div>
            <h1 className="font-semibold text-slate-800">{title}</h1>
            <p className="hidden md:block text-sm text-slate-500">{sub}</p>
          </div>

          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            🟢 Active
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;