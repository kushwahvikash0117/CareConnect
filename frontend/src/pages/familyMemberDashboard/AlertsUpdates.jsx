import React from 'react';
import {
  Bell,
  AlertTriangle,
  ShieldAlert,
  CheckCircle,
  Phone,
  MapPin,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const AlertsUpdates = () => {
  const navigate = useNavigate();
  const alerts = [
    {
      type: 'SOS Emergency Alert',
      time: '10:30 AM',
      status: 'Active',
      priority: 'High',
      description: 'Senior citizen pressed emergency SOS button.',
    },
    {
      type: 'Missed Daily Check-In',
      time: '09:15 AM',
      status: 'Resolved',
      priority: 'Medium',
      description: 'No response received during scheduled check-in.',
    },
    {
      type: 'Medication Reminder Missed',
      time: 'Yesterday',
      status: 'Resolved',
      priority: 'Low',
      description: 'Medicine intake confirmation was not received.',
    },
    {
      type: 'Location Safety Alert',
      time: '2 Days Ago',
      status: 'Resolved',
      priority: 'High',
      description: 'Senior moved outside designated safe zone.',
    },
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'border-red-500';
      case 'Medium':
        return 'border-yellow-500';
      default:
        return 'border-green-500';
    }
  };
  

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 min-h-screen">
     <div className="mb-8">
  <h1 className="text-4xl font-bold text-slate-800">
    Alerts & Updates
  </h1>

  <p className="text-slate-500 mt-2">
    Monitor emergencies, safety incidents and important updates.
  </p>
</div>

      {/* Summary Cards */}
<div className="grid md:grid-cols-3 gap-5 mb-8">

  <div className="bg-white rounded-3xl p-5 shadow-md">
    <AlertTriangle className="text-red-500 mb-3"/>
    <p className="text-slate-500">
      Active Alerts
    </p>
    <h2 className="text-3xl font-bold text-red-500">
      1
    </h2>
  </div>

  <div className="bg-white rounded-3xl p-5 shadow-md">
    <Bell className="text-yellow-500 mb-3"/>
    <p className="text-slate-500">
      Pending Review
    </p>
    <h2 className="text-3xl font-bold text-yellow-500">
      2
    </h2>
  </div>

  <div className="bg-white rounded-3xl p-5 shadow-md">
    <CheckCircle className="text-emerald-500 mb-3"/>
    <p className="text-slate-500">
      Resolved Alerts
    </p>
    <h2 className="text-3xl font-bold text-emerald-500">
      8
    </h2>
  </div>

</div>

      {/* Alert Timeline */}
<div className="space-y-5">
  {alerts.map((alert, index) => (
    <div
      key={index}
      className={`
        bg-white
        rounded-3xl
        p-6
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        border-l-4
        ${getPriorityColor(alert.priority)}
      `}
    >
      {/* Top Section */}
      <div className="flex justify-between items-start">

        <div className="flex items-center gap-4">

          <div
            className={`p-3 rounded-2xl ${
              alert.priority === "High"
                ? "bg-red-100"
                : alert.priority === "Medium"
                ? "bg-yellow-100"
                : "bg-green-100"
            }`}
          >
            {alert.priority === "High" ? (
              <ShieldAlert
                className="text-red-500"
                size={24}
              />
            ) : (
              <Bell
                className="text-teal-500"
                size={24}
              />
            )}
          </div>

          <div>
            <h3 className="font-bold text-lg text-slate-800">
              {alert.type}
            </h3>

            <p className="text-slate-500 text-sm mt-1">
              {alert.description}
            </p>
          </div>

        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            alert.status === "Active"
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {alert.status}
        </span>

      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-5">

        <div className="flex items-center gap-3">

          <span className="text-sm text-slate-500">
            {alert.time}
          </span>

          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              alert.priority === "High"
                ? "bg-red-100 text-red-600"
                : alert.priority === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {alert.priority} Priority
          </span>

        </div>

        {alert.status === "Active" && (
          <div className="flex gap-2">

            <button
  onClick={() => navigate("/fdashboard/communication")}
  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition"
>
  Respond
</button>

<button
  onClick={() => navigate("/fdashboard/location")}
  className="bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl text-sm font-medium transition"
>
  Details
</button>

          </div>
        )}

      </div>
    </div>
  ))}
</div>

      {/* Emergency Action */}
{/* Emergency Action */}
<div className="mt-10 rounded-3xl bg-gradient-to-r from-red-500 to-rose-600 text-white p-8 shadow-xl">

  <div className="flex items-center gap-3 mb-4">
    <ShieldAlert size={28} />
    <h2 className="text-2xl font-bold">
      Emergency Response Center
    </h2>
  </div>

  <p className="text-red-50 mb-6">
    Immediate actions available for active high-priority alerts.
  </p>

  <div className="flex flex-wrap gap-4">

    <button
      onClick={() => navigate("/fdashboard/communication")}
      className="flex items-center gap-2 bg-white text-red-600 px-5 py-3 rounded-xl font-semibold hover:bg-red-50 transition"
    >
      <Phone size={18} />
      Contact Senior
    </button>

    <button
      onClick={() => navigate("/fdashboard/location")}
      className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-xl hover:bg-white/30 transition"
    >
      <MapPin size={18} />
      View Location
    </button>

  </div>

</div>
    </div>
  );
};

export default AlertsUpdates;