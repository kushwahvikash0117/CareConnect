import React, { useState, useEffect } from "react";
import {
  Bell,
  MapPin,
  User,
  Shield,
  HelpCircle,
  LogOut,
  Phone,
  Lock,
  Users,
  ChevronRight,
} from "lucide-react";

const FamilySettings = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
const [showPasswordModal, setShowPasswordModal] = useState(false);
const [showEmergencyModal, setShowEmergencyModal] = useState(false);
const [showSupportModal, setShowSupportModal] = useState(false);
const [showLogoutModal, setShowLogoutModal] = useState(false);
const [showFamilyModal, setShowFamilyModal] = useState(false);
const [profile, setProfile] = useState({
  name: "Family Caregiver",
  email: "caregiver@example.com",
  phone: "+91 9876543210",
});
useEffect(() => {
  const savedProfile = localStorage.getItem(
    "caregiverProfile"
  );

  if (savedProfile) {
    setProfile(JSON.parse(savedProfile));
  }
}, []);
  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 min-h-screen hover:shadow-lg transition-all duration-300">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Settings & Preferences
        </h1>

        <p className="text-slate-500 mt-2">
          Manage notifications, security, family access and support.
        </p>
      </div>

      {/* Profile Banner */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-3xl p-6 shadow-lg mb-8 hover:shadow-lg transition-all duration-300">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <User size={28} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              {profile.name}
            </h2>

            <p className="text-cyan-50">
              {profile.phone}
            </p>
          </div>

        </div>

      </div>
      <div className="grid md:grid-cols-3 gap-4 mb-8">

  <div className="bg-white rounded-3xl p-5 shadow-md hover:shadow-lg transition-all duration-300">
    <p className="text-slate-500">
      Connected Caregivers
    </p>

    <h2 className="text-3xl font-bold text-teal-600">
      4
    </h2>
  </div>

  <div className="bg-white rounded-3xl p-5 shadow-md hover:shadow-lg transition-all duration-300">
    <p className="text-slate-500">
      Emergency Contacts
    </p>

    <h2 className="text-3xl font-bold text-red-500">
      2
    </h2>
  </div>

  <div className="bg-white rounded-3xl p-5 shadow-md hover:shadow-lg transition-all duration-300">
    <p className="text-slate-500">
      Monitoring Status
    </p>

    <h2 className="text-lg font-bold text-green-600">
      Active
    </h2>
  </div>

</div>

      {/* Notification Settings */}
      <div className="bg-white rounded-3xl shadow-md p-6 mb-6">

        <div className="flex items-center gap-3 mb-5">
          <Bell className="text-yellow-500" />
          <h2 className="text-xl font-bold">
            Notification Settings
          </h2>
        </div>

        <div className="space-y-4">

          <label className="flex justify-between items-center">
            <span>SOS Emergency Alerts</span>
            <label className="relative inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    defaultChecked
    className="sr-only peer"
  />

  <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:bg-teal-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full">
  </div>
</label>
          </label>

          <label className="flex justify-between items-center">
            <span>Missed Check-In Alerts</span>
            <label className="relative inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    defaultChecked
    className="sr-only peer"
  />

  <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:bg-teal-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full">
  </div>
</label>
          </label>

          <label className="flex justify-between items-center">
            <span>Medication Reminders</span>
            <label className="relative inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    defaultChecked
    className="sr-only peer"
  />

  <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:bg-teal-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full">
  </div>
</label>
          </label>

          <label className="flex justify-between items-center">
            <span>Location Safety Alerts</span>
            <label className="relative inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    defaultChecked
    className="sr-only peer"
  />

  <div className="w-11 h-6 bg-slate-200 rounded-full peer peer-checked:bg-teal-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full">
  </div>
</label>
          </label>

        </div>

      </div>

      {/* Safe Zone */}
      <div className="bg-white rounded-3xl shadow-md p-6 mb-6">

        <div className="flex items-center gap-3 mb-4">
          <MapPin className="text-teal-600" />
          <h2 className="text-xl font-bold">
            Safe Zone Settings
          </h2>
        </div>

        <p className="text-slate-600 mb-4">
          Receive alerts whenever the senior citizen
          moves outside the designated safe zone.
        </p>

        <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-5 py-3 rounded-xl font-medium">
          Manage Safe Zones
        </button>

      </div>

      {/* Account Settings */}
      <div className="bg-white rounded-3xl shadow-md p-6 mb-6">

        <div className="flex items-center gap-3 mb-5">
          <Shield className="text-emerald-500" />
          <h2 className="text-xl font-bold">
            Account Settings
          </h2>
        </div>

        <div className="space-y-3">

          <button
  onClick={() => setShowProfileModal(true)}
  className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-100 hover:bg-slate-200"
>
  <div className="flex items-center gap-3">
    <User size={18}/>
    Edit Profile
  </div>

  <ChevronRight size={18}/>
</button>

          <button
  onClick={() => setShowPasswordModal(true)}
  className="w-full flex items-center gap-3 text-left p-4 rounded-xl bg-slate-100 hover:bg-slate-200 transition"
>
  <Lock size={18}/>
  Change Password
</button>

          <button
  onClick={() => setShowFamilyModal(true)}
  className="w-full flex items-center gap-3 text-left p-4 rounded-xl bg-slate-100 hover:bg-slate-200 transition"
>
  <Users size={18} />
  Manage Family Members
</button>

        </div>

      </div>

      {/* Emergency Preferences */}
   <div className="bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-3xl p-6 shadow-lg mb-6">

  <div className="flex items-center justify-between mb-4">

    <div>
      <h2 className="text-2xl font-bold">
        Emergency Preferences
      </h2>

      <p className="text-red-100 mt-1">
        Configure emergency contacts and notification rules.
      </p>
    </div>

    <button
      onClick={() => setShowEmergencyModal(true)}
      className="bg-white text-red-600 px-5 py-3 rounded-xl font-semibold hover:bg-red-50 transition"
    >
      Manage Contacts
    </button>

  </div>

  <div className="bg-white/20 rounded-2xl p-4 mt-6">

    <p className="text-red-100 text-sm mb-1">
      Primary Emergency Contact
    </p>

    <h3 className="font-bold text-lg">
      Rahul Sharma
    </h3>

    <p className="text-red-50">
      +91 9876543210
    </p>

  </div>

</div>

      {/* Help & Support */}
      <div className="bg-white rounded-3xl shadow-md p-6 mb-6">

        <div className="flex items-center gap-3 mb-4">
          <HelpCircle className="text-blue-500" />
          <h2 className="text-xl font-bold">
            Help & Support
          </h2>
        </div>

        <p className="text-slate-600 mb-4">
          Need assistance? Our support team is available
          to help with technical issues and emergency guidance.
        </p>

        <button
  onClick={() => setShowSupportModal(true)}
  className="bg-blue-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-blue-700"
>
  Contact Support
</button>

      </div>

      {/* Logout */}
      <div className="bg-white rounded-3xl shadow-md p-6">

        <div className="flex items-center gap-3 mb-4">
          <LogOut className="text-red-500" />
          <h2 className="text-xl font-bold text-red-500">
            Logout
          </h2>
        </div>

        <button
  onClick={() => setShowLogoutModal(true)}
  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition"
>
  Logout
</button>

      </div>
      {showProfileModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white p-6 rounded-3xl w-[450px]">

      <h2 className="text-2xl font-bold mb-5">
        Edit Profile
      </h2>

      <div className="space-y-4">

        <input
  value={profile.name}
  onChange={(e) =>
    setProfile({
      ...profile,
      name: e.target.value,
    })
  }
  className="w-full border p-3 rounded-xl"
/>

<input
  value={profile.email}
  onChange={(e) =>
    setProfile({
      ...profile,
      email: e.target.value,
    })
  }
  className="w-full border p-3 rounded-xl"
/>

<input
  value={profile.phone}
  onChange={(e) =>
    setProfile({
      ...profile,
      phone: e.target.value,
    })
  }
  className="w-full border p-3 rounded-xl"
/>

      </div>

      <div className="flex justify-end gap-3 mt-5">

        <button
          onClick={() => setShowProfileModal(false)}
          className="px-4 py-2 bg-slate-200 rounded-xl"
        >
          Cancel
        </button>

        <button
  onClick={() => {
    localStorage.setItem(
      "caregiverProfile",
      JSON.stringify(profile)
    );

    alert("Profile Updated Successfully");
    setShowProfileModal(false);
  }}
  className="px-4 py-2 bg-teal-600 text-white rounded-xl"
>
  Save
</button>

      </div>

    </div>

  </div>
)}

{showPasswordModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white p-6 rounded-3xl w-[450px]">

      <h2 className="text-2xl font-bold mb-5">
        Change Password
      </h2>

      <div className="space-y-4">

        <input
          type="password"
          placeholder="Current Password"
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full border p-3 rounded-xl"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-3 rounded-xl"
        />

      </div>

      <div className="flex justify-end gap-3 mt-5">

        <button
          onClick={() => setShowPasswordModal(false)}
          className="px-4 py-2 bg-slate-200 rounded-xl"
        >
          Cancel
        </button>

        <button
          className="px-4 py-2 bg-teal-600 text-white rounded-xl"
        >
          Update
        </button>

      </div>

    </div>

  </div>
)}

{showEmergencyModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white p-6 rounded-3xl w-[500px]">

      <h2 className="text-2xl font-bold mb-5">
        Emergency Contacts
      </h2>

      <div className="space-y-4">

        <div className="p-4 bg-slate-100 rounded-xl">
          Rahul Sharma (Primary)
        </div>

        <div className="p-4 bg-slate-100 rounded-xl">
          Sunita Sharma (Secondary)
        </div>

      </div>

      <button
  onClick={() => setShowEmergencyModal(true)}
  className="bg-white text-red-600 px-5 py-3 rounded-xl font-semibold"
>
  Add Contact
</button>

    </div>

  </div>
)}

{showSupportModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white p-6 rounded-3xl w-[450px]">

      <h2 className="text-2xl font-bold mb-5">
        Support Center
      </h2>

      <p>Email: support@careconnect.com</p>
      <p className="mt-2">Phone: +91 9876543210</p>

      <button
        onClick={() => setShowSupportModal(false)}
        className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-xl"
      >
        Close
      </button>

    </div>

  </div>
)}

{showLogoutModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white p-6 rounded-3xl w-[400px] text-center">

      <h2 className="text-2xl font-bold mb-4">
        Logout
      </h2>

      <p className="text-slate-500">
        Are you sure you want to logout?
      </p>

      <div className="flex justify-center gap-4 mt-6">

        <button
          onClick={() => setShowLogoutModal(false)}
          className="px-4 py-2 bg-slate-200 rounded-xl"
        >
          Cancel
        </button>

        <button
          className="px-4 py-2 bg-red-600 text-white rounded-xl"
        >
          Logout
        </button>

      </div>

    </div>

  </div>
)}

{showFamilyModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white p-6 rounded-3xl w-[500px]">

      <h2 className="text-2xl font-bold mb-5">
        Family Members
      </h2>

      <div className="space-y-3">

        <div className="p-4 bg-slate-100 rounded-xl">
          Rahul Sharma (Primary)
        </div>

        <div className="p-4 bg-slate-100 rounded-xl">
          Sunita Sharma (Secondary)
        </div>

      </div>

      <button
        onClick={() => setShowFamilyModal(false)}
        className="mt-5 bg-teal-600 text-white px-4 py-2 rounded-xl"
      >
        Close
      </button>

    </div>

  </div>
)}

    </div>
  );
};

export default FamilySettings;