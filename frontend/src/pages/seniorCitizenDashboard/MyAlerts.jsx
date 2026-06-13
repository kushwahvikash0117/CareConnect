// src/pages/seniorCitizenDashboard/MyAlerts.jsx
import React from 'react';

const MyAlerts = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">My Alerts</h1>
    <div className="space-y-4">
      <div className="bg-white p-4 rounded shadow border-l-4 border-yellow-500">
        <p className="font-bold">Recent Incident</p>
        <p className="text-sm text-gray-500">Status: Active</p>
      </div>
    </div>
  </div>
);
export default MyAlerts;