import React from "react";
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
} from "lucide-react";

const FamilySettings = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 min-h-screen">

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
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-3xl p-6 shadow-lg mb-8">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <User size={28} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Family Caregiver
            </h2>

            <p className="text-cyan-50">
              Managing Ram Prasad's care network
            </p>
          </div>

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
            <input type="checkbox" defaultChecked />
          </label>

          <label className="flex justify-between items-center">
            <span>Missed Check-In Alerts</span>
            <input type="checkbox" defaultChecked />
          </label>

          <label className="flex justify-between items-center">
            <span>Medication Reminders</span>
            <input type="checkbox" defaultChecked />
          </label>

          <label className="flex justify-between items-center">
            <span>Location Safety Alerts</span>
            <input type="checkbox" defaultChecked />
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

          <button className="w-full flex items-center gap-3 text-left p-4 rounded-xl bg-slate-100 hover:bg-slate-200 transition">
            <User size={18} />
            Edit Profile
          </button>

          <button className="w-full flex items-center gap-3 text-left p-4 rounded-xl bg-slate-100 hover:bg-slate-200 transition">
            <Lock size={18} />
            Change Password
          </button>

          <button className="w-full flex items-center gap-3 text-left p-4 rounded-xl bg-slate-100 hover:bg-slate-200 transition">
            <Users size={18} />
            Manage Family Members
          </button>

        </div>

      </div>

      {/* Emergency Preferences */}
      <div className="bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-3xl p-6 shadow-lg mb-6">

        <div className="flex items-center gap-3 mb-4">
          <Phone size={26} />
          <h2 className="text-2xl font-bold">
            Emergency Preferences
          </h2>
        </div>

        <p className="text-red-50 mb-5">
          Configure emergency contact priorities and
          notification escalation rules.
        </p>

        <button className="bg-white text-red-600 px-5 py-3 rounded-xl font-semibold">
          Configure Emergency Contacts
        </button>

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

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-blue-700">
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

        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition">
          Logout
        </button>

      </div>

    </div>
  );
};

export default FamilySettings;