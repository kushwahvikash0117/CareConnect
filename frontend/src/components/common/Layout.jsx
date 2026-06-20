// src/components/common/Layout.jsx

import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import AdminSidebar from "../dashboard/AdminSidebar";
import FamilySidebar from "../dashboard/FamilySidebar";
import SeniorSidebar from "../dashboard/SeniorSidebar";

const Layout = () => {
  const location = useLocation();

  const getSidebar = () => {
    if (location.pathname.startsWith("/adashboard")) {
      return <AdminSidebar />;
    }

    if (location.pathname.startsWith("/fdashboard")) {
      return <FamilySidebar />;
    }

    if (location.pathname.startsWith("/sdashboard")) {
      return <SeniorSidebar />;
    }

    return null;
  };

  const getTitle = () => {
    if (location.pathname.startsWith("/adashboard")) {
      return "Admin Dashboard";
    }

    if (location.pathname.startsWith("/fdashboard")) {
      return "Family Dashboard";
    }

    if (location.pathname.startsWith("/sdashboard")) {
      return "Senior Citizen Dashboard";
    }

    return "CareConnect";
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Dynamic Sidebar */}
      {getSidebar()}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-gray-700">
            {getTitle()}
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
              U
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;