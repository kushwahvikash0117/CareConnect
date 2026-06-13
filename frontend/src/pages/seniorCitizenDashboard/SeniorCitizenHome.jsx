// src/pages/seniorCitizenDashboard/SeniorCitizenHome.jsx
import React from 'react';

const SeniorCitizenHome = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Good Morning, Ram Prasad</h1>
      
      {/* SOS Button */}
      <button className="w-64 h-64 bg-red-600 text-white rounded-full shadow-2xl hover:bg-red-700 transition-transform transform hover:scale-105 active:scale-95 text-2xl font-bold border-4 border-red-300">
        SOS EMERGENCY
      </button>

      {/* Quick Actions Grid */}
      <div className="mt-12 grid grid-cols-2 gap-4 w-full max-w-md">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <h3 className="font-semibold text-gray-700">Check-in</h3>
          <p className="text-sm text-gray-500">Status: Pending</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
          <h3 className="font-semibold text-gray-700">Health Status</h3>
          <p className="text-sm text-gray-500">Good (72%)</p>
        </div>
      </div>
    </div>
  );
};

export default SeniorCitizenHome;