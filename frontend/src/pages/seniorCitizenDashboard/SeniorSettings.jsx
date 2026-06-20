import React from "react";
import { useNavigate } from "react-router-dom"; // Added for navigation
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
  const navigate = useNavigate();

  const handleSettingClick = (setting) => {
    alert(`${setting} feature coming soon`);
  };

  const handleLogout = () => {
    // Clear user session
    localStorage.removeItem("token");
    
    // Redirect to Login page
    alert("Logged Out Successfully");
    navigate("/login"); 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Settings</h1>
      <p className="text-slate-500 mb-8">
        Manage your account, emergency contacts and preferences.
      </p>

      <div className="space-y-5">
        {/* Notifications */}
        <SettingItem 
          icon={<Bell className="text-blue-600" />} 
          title="Notifications" 
          desc="Alert and reminder preferences" 
          onClick={() => handleSettingClick("Notifications")} 
        />

        {/* Emergency Contacts */}
        <SettingItem 
          icon={<Phone className="text-green-600" />} 
          title="Emergency Contacts" 
          desc="Manage trusted contacts" 
          onClick={() => handleSettingClick("Emergency Contacts")} 
        />

        {/* Privacy */}
        <SettingItem 
          icon={<Shield className="text-red-500" />} 
          title="Privacy & Security" 
          desc="Account protection settings" 
          onClick={() => handleSettingClick("Privacy & Security")} 
        />

        {/* Language */}
        <SettingItem 
          icon={<Globe className="text-purple-600" />} 
          title="Language" 
          desc="English (India)" 
          onClick={() => handleSettingClick("Language")} 
        />

        {/* Appearance */}
        <SettingItem 
          icon={<Moon className="text-slate-700" />} 
          title="Appearance" 
          desc="Light Mode" 
          onClick={() => handleSettingClick("Appearance")} 
        />
      </div>

      {/* App Info */}
      <div className="bg-white rounded-3xl shadow-lg p-5 mt-6">
        <h3 className="font-semibold text-slate-800">SeniorGuard</h3>
        <p className="text-sm text-slate-500 mt-1">Version 1.0.0</p>
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

// Reusable component for cleaner code
const SettingItem = ({ icon, title, desc, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-3xl shadow-lg p-5 flex justify-between items-center cursor-pointer hover:shadow-xl transition"
  >
    <div className="flex items-center gap-4">
      {icon}
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </div>
    <ChevronRight className="text-slate-400" />
  </div>
);

export default SeniorSettings;