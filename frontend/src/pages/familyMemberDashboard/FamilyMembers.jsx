// src/pages/familyMemberDashboard/FamilyMembers.jsx
import React from 'react';

const FamilyMembers = () => {
  // Mock data representing family members linked to the senior's profile
  const members = [
    { name: 'Rahul Prasad', relation: 'Son', phone: '9876543210' },
    { name: 'Sunita Prasad', relation: 'Daughter', phone: '9876543211' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Family Members</h1>
      
      <div className="grid gap-4">
        {members.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.relation}</p>
              <p className="text-sm text-blue-600 font-medium mt-1">{member.phone}</p>
            </div>
            <button className="text-gray-400 hover:text-red-600 transition">
              Remove
            </button>
          </div>
        ))}
      </div>

      <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg">
        + Add New Member
      </button>
    </div>
  );
};

export default FamilyMembers;