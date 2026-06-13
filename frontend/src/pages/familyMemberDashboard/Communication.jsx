// src/pages/familyMemberDashboard/Communication.jsx
import React from 'react';

const Communication = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Communication</h1>
    <div className="grid grid-cols-2 gap-4">
      <button className="bg-blue-600 text-white p-4 rounded">Call Senior</button>
      <button className="bg-gray-600 text-white p-4 rounded">Message</button>
    </div>
  </div>
);
export default Communication;