// src/pages/seniorCitizenDashboard/Profile.jsx
import React from 'react';

const Profile = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">My Profile</h1>
    <div className="bg-white p-6 rounded shadow">
      <p><strong>Name:</strong> Ram Prasad</p>
      <p><strong>Age:</strong> 72</p>
      <button className="mt-4 text-blue-600 font-semibold">Edit Profile</button>
    </div>
  </div>
);
export default Profile;