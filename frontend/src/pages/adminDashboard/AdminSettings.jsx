// src/pages/adminDashboard/AdminSettings.jsx
import React from 'react';

const AdminSettings = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">System Settings</h1>
    <div className="bg-white p-6 rounded shadow border">
      <h2 className="font-semibold mb-2">User Permissions</h2>
      <p className="text-gray-600 mb-4">Manage admin roles and system audit logs here.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
    </div>
  </div>
);
export default AdminSettings;