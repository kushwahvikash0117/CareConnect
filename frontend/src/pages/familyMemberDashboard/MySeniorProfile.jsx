// src/pages/familyMemberDashboard/MySeniorProfile.jsx
import React from 'react';

const MySeniorProfile = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">My Senior Profile</h2>
        
        {/* Profile Info */}
        <div className="flex items-center space-x-6 mb-8">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
            RP
          </div>
          <div>
            <h3 className="text-xl font-semibold">Ram Prasad</h3>
            <p className="text-gray-500">Age: 72</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-6 border-t pt-6">
          <div>
            <p className="text-sm text-gray-500">Emergency Contact</p>
            <p className="font-medium text-gray-800">9876543210</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Health Status</p>
            <p className="font-medium text-green-600">Good (72%)</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex gap-4">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Call Family
          </button>
          <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default MySeniorProfile;