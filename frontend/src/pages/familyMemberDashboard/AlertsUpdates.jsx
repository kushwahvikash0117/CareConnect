// src/pages/familyMemberDashboard/AlertsUpdates.jsx
import React from 'react';

const AlertsUpdates = () => {
  const alerts = [
    { type: 'SOS Alert', time: '10:30 AM', status: 'Active' },
    { type: 'Missed Check-in', time: '09:15 AM', status: 'Resolved' }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Alerts & Updates</h2>
      <div className="space-y-4">
        {alerts.map((a, i) => (
          <div key={i} className="p-4 bg-white rounded-lg shadow border-l-4 border-red-500">
            <p className="font-bold">{a.type}</p>
            <p className="text-sm text-gray-500">{a.time} - {a.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AlertsUpdates;