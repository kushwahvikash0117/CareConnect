import React from 'react';
import {
  Users,
  Phone,
  MessageCircle,
  Trash2,
  Plus,
  Star,
} from "lucide-react";

const FamilyMembers = () => {
  const members = [
    {
      name: 'Rahul Prasad',
      relation: 'Son',
      phone: '9876543210',
      status: 'Available',
    },
    {
      name: 'Sunita Prasad',
      relation: 'Daughter',
      phone: '9876543211',
      status: 'Available',
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 min-h-screen">
      <div className="mb-8">
  <h1 className="text-4xl font-bold text-slate-800">
    Family Members
  </h1>

  <p className="text-slate-500 mt-2">
    Manage caregivers and emergency contacts.
  </p>
</div>

<div className="grid md:grid-cols-3 gap-4 mb-6">
  <div className="bg-white rounded-2xl p-5 shadow">
    <p className="text-slate-500">
      Total Members
    </p>

    <h2 className="text-3xl font-bold text-teal-600">
      {members.length}
    </h2>
  </div>

  <div className="bg-white rounded-2xl p-5 shadow">
    <p className="text-slate-500">
      Active Contacts
    </p>

    <h2 className="text-3xl font-bold text-emerald-500">
      {members.length}
    </h2>
  </div>

  <div className="bg-white rounded-2xl p-5 shadow">
    <p className="text-slate-500">
      Emergency Priority
    </p>

    <h2 className="text-lg font-bold text-red-500">
      Rahul Prasad
    </h2>
  </div>
</div>

      {/* Emergency Contact Card */}
<div className="bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-3xl p-6 mb-6 shadow-lg">
  <h2 className="font-bold text-xl">
    🚨 Primary Emergency Contact
  </h2>

  <p className="mt-2 text-red-50">
    Rahul Prasad will receive SOS alerts,
    live location updates and emergency notifications.
  </p>
</div>

      {/* Family Members List */}
{/* Family Members List */}
<div className="grid md:grid-cols-2 gap-6">
  {members.map((member, index) => (
    <div
      key={index}
      className="bg-white rounded-3xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition"
    >
      <div className="flex gap-4">

        <div className="h-14 w-14 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white flex items-center justify-center">
          <Users size={22} />
        </div>

        <div className="flex-1">

          <div className="flex items-center gap-2">
            <h3 className="font-bold text-lg text-slate-800">
              {member.name}
            </h3>

            {index === 0 && (
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs flex items-center gap-1">
                <Star size={12} />
                Primary
              </span>
            )}
          </div>

          <p className="text-slate-500">
            {member.relation}
          </p>

          <p className="text-slate-500 mt-2 flex items-center gap-2">
            <Phone size={15} />
            {member.phone}
          </p>

          <p className="text-xs text-slate-400 mt-1">
            Last contacted 2 hours ago
          </p>
        </div>

      </div>

      <div className="flex gap-3 mt-5">

        <button className="flex-1 bg-emerald-500 text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-600">
          <Phone size={16} />
          Call
        </button>

        <button className="flex-1 bg-teal-600 text-white py-2 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-700">
          <MessageCircle size={16} />
          Message
        </button>

        <button className="px-3 text-red-500 hover:bg-red-50 rounded-xl">
          <Trash2 size={18} />
        </button>

      </div>
    </div>
  ))}
</div>
        

      {/* Add Member Button */}
<button className="
w-full
mt-8
bg-gradient-to-r
from-teal-600
to-cyan-600
text-white
py-4
rounded-2xl
font-semibold
flex
items-center
justify-center
gap-2
shadow-lg
hover:scale-[1.01]
transition
">
  <Plus size={18}/>
  Add New Family Member
</button>
    </div>
  );
};

export default FamilyMembers;