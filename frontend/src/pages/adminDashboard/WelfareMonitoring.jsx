// src/pages/adminDashboard/WelfareMonitoring.jsx
import React from 'react';

const WelfareMonitoring = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Welfare Monitoring</h1>
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded shadow border">
        <h3 className="text-gray-500">At-Risk Seniors</h3>
        <p className="text-2xl font-bold">27</p>
      </div>
      <div className="bg-white p-6 rounded shadow border">
        <h3 className="text-gray-500">Wellness Score Avg</h3>
        <p className="text-2xl font-bold">78%</p>
      </div>
    </div>
  </div>
);
export default WelfareMonitoring;