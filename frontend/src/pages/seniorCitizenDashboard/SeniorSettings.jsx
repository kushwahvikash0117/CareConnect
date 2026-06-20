import React from "react";
import {
  Bell,
  Phone,
  Shield,
  Globe,
  Moon,
  LogOut,
  ChevronRight,
} from "lucide-react";

const SeniorSettings = () => {

  const handleSettingClick = (setting) => {
    alert(`${setting} feature coming soon`);
  };

  const handleLogout = () => {
    alert("Logged Out Successfully");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">

      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        Settings
      </h1>

      <p className="text-slate-500 mb-8">
        Manage your account, emergency contacts and preferences.
      </p>

      <div className="space-y-5">

        {/* Notifications */}
        <div
          onClick={() => handleSettingClick("Notifications")}
          className="bg-white rounded-3xl shadow-lg p-5 flex justify-between items-center cursor-pointer hover:shadow-xl transition"
        >
          <div className="flex items-center gap-4">
            <Bell className="text-blue-600" />

            <div>
              <h3 className="font-semibold">
                Notifications
              </h3>

              <p className="text-sm text-slate-500">
                Alert and reminder preferences
              </p>
            </div>
          </div>

          <ChevronRight />
        </div>

        {/* Emergency Contacts */}
        <div
          onClick={() => handleSettingClick("Emergency Contacts")}
          className="bg-white rounded-3xl shadow-lg p-5 flex justify-between items-center cursor-pointer hover:shadow-xl transition"
        >
          <div className="flex items-center gap-4">
            <Phone className="text-green-600" />

            <div>
              <h3 className="font-semibold">
                Emergency Contacts
              </h3>

              <p className="text-sm text-slate-500">
                Manage trusted contacts
              </p>
            </div>
          </div>

          <ChevronRight />
        </div>

        {/* Privacy */}
        <div
          onClick={() => handleSettingClick("Privacy & Security")}
          className="bg-white rounded-3xl shadow-lg p-5 flex justify-between items-center cursor-pointer hover:shadow-xl transition"
        >
          <div className="flex items-center gap-4">
            <Shield className="text-red-500" />

            <div>
              <h3 className="font-semibold">
                Privacy & Security
              </h3>

              <p className="text-sm text-slate-500">
                Account protection settings
              </p>
            </div>
          </div>

          <ChevronRight />
        </div>

        {/* Language */}
        <div
          onClick={() => handleSettingClick("Language")}
          className="bg-white rounded-3xl shadow-lg p-5 flex justify-between items-center cursor-pointer hover:shadow-xl transition"
        >
          <div className="flex items-center gap-4">
            <Globe className="text-purple-600" />

            <div>
              <h3 className="font-semibold">
                Language
              </h3>

              <p className="text-sm text-slate-500">
                English (India)
              </p>
            </div>
          </div>

          <ChevronRight />
        </div>

        {/* Appearance */}
        <div
          onClick={() => handleSettingClick("Appearance")}
          className="bg-white rounded-3xl shadow-lg p-5 flex justify-between items-center cursor-pointer hover:shadow-xl transition"
        >
          <div className="flex items-center gap-4">
            <Moon className="text-slate-700" />

            <div>
              <h3 className="font-semibold">
                Appearance
              </h3>

              <p className="text-sm text-slate-500">
                Light Mode
              </p>
            </div>
          </div>

          <ChevronRight />
        </div>

      </div>

      {/* App Info */}
      <div className="bg-white rounded-3xl shadow-lg p-5 mt-6">
        <h3 className="font-semibold text-slate-800">
          SeniorGuard
        </h3>

        <p className="text-sm text-slate-500 mt-1">
          Version 1.0.0
        </p>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-4 rounded-2xl font-semibold flex justify-center items-center gap-2 transition"
      >
        <LogOut size={18} />
        Logout
      </button>

    </div>
  );
};

export default SeniorSettings;