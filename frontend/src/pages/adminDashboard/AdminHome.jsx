// src/pages/adminDashboard/AdminHome.jsx
import React from 'react';

const AdminHome = () => {
  const stats = [
    { title: 'Total Seniors', value: '1,248' },
    { title: 'Active Alerts', value: '27' },
    { title: 'Fraud Reports', value: '35' }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h3 className="text-gray-500 text-sm">{s.title}</h3>
            <p className="text-3xl font-bold mt-2">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminHome;