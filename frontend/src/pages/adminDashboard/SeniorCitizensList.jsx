// src/pages/adminDashboard/SeniorCitizensList.jsx
import React from 'react';

const SeniorCitizensList = () => {
  const seniors = [{ name: 'Ram Prasad', id: 'SC001', status: 'Active' }];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Registered Seniors</h2>
      <table className="w-full bg-white rounded-lg shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {seniors.map((s, i) => (
            <tr key={i} className="border-t">
              <td className="p-4">{s.name}</td>
              <td className="p-4">{s.id}</td>
              <td className="p-4 text-green-600 font-semibold">{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SeniorCitizensList;