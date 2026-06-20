import React from 'react';
import {
  Bell,
  AlertTriangle,
  ShieldAlert,
  CheckCircle,
} from "lucide-react";

const AlertsUpdates = () => {
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
      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`bg-white
rounded-3xl
p-6
shadow-md
hover:shadow-xl
transition
border-l-4 ${getPriorityColor(
              alert.priority
            )}`}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">

  {alert.priority === "High" ? (
    <ShieldAlert className="text-red-500"/>
  ) : (
    <Bell className="text-teal-500"/>
  )}

  <h3 className="font-bold text-lg">
    {alert.type}
  </h3>

</div>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  alert.status === 'Active'
                    ? 'bg-red-100 text-red-600'
                    : 'bg-green-100 text-green-600'
                }`}
              >
                {alert.status}
              </span>
            </div>

            <p className="text-gray-600 mt-2">
              {alert.description}
            </p>

            <div className="flex justify-between mt-3 text-sm text-gray-500">
              <span>{alert.time}</span>
              <span>Priority: {alert.priority}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency Action */}
<div className="mt-10 rounded-3xl bg-gradient-to-r from-red-500 to-rose-600 text-white p-8 shadow-xl">
         <div className="flex items-center gap-3 mb-4">
  <ShieldAlert size={28}/>
  <h2 className="text-2xl font-bold">
    Emergency Response Center
  </h2>
</div>

<p className="text-red-50 mb-6">
  Immediate actions available for active high-priority alerts.
</p>

<div className="flex flex-wrap gap-4">

  <button className="bg-white text-red-600 px-5 py-3 rounded-xl font-semibold">
    📞 Contact Senior
  </button>

  <button className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-xl">
    📍 View Location
  </button>

</div>

      </div>
    </div>
  );
};

export default AlertsUpdates;