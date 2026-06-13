// src/pages/adminDashboard/AlertsMonitor.jsx
import React from 'react';

const AlertsMonitor = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Alerts & 505 Monitor</h1>
    <div className="bg-white rounded shadow overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-4">Senior Name</th>
            <th className="p-4">Alert Type</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-4">Savita Ben</td>
            <td className="p-4">SOS Alert</td>
            <td className="p-4 text-red-600">Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
export default AlertsMonitor;