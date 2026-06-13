// src/pages/seniorCitizenDashboard/FraudReports.jsx
import React from 'react';

const FraudReports = () => {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Report Fraud/Scam</h2>
      <form className="space-y-4">
        <textarea 
          placeholder="Describe the incident..." 
          className="w-full p-3 border rounded-lg h-32"
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
          Submit Report
        </button>
      </form>
    </div>
  );
};
export default FraudReports;