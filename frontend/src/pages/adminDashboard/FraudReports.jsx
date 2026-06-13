// src/pages/adminDashboard/FraudReports.jsx
import React from 'react';

const FraudReports = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Fraud Reports</h1>
    <div className="space-y-4">
      <div className="bg-white p-4 rounded shadow border-l-4 border-yellow-500">
        <p className="font-bold">Report #12345</p>
        <p className="text-sm text-gray-500">Status: Under Investigation</p>
      </div>
    </div>
  </div>
);
export default FraudReports;