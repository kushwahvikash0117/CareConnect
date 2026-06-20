import React from 'react';
import { Users, Shield, Settings, Link, FileText } from 'lucide-react'; // Lucide icons use kiye hain

const SettingsOption = ({ icon: Icon, title }) => (
  <button className="w-full flex items-center gap-4 p-4 hover:bg-slate-50 border-b border-slate-100 transition-all">
    <Icon className="w-5 h-5 text-teal-600" />
    <span className="font-medium text-slate-700">{title}</span>
  </button>
);

const AdminSettings = () => {
  const options = [
    { icon: Users, title: 'User Management' },
    { icon: Shield, title: 'Roles & Permissions' },
    { icon: Settings, title: 'System Settings' },
    { icon: Link, title: 'Integrations' },
    { icon: FileText, title: 'Audit Logs' },
  ];

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-slate-800">Settings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar Menu - Matches your screenshot */}
        <div className="lg:col-span-1 bg-white rounded-[14px] border border-slate-200 shadow-sm overflow-hidden h-fit">
          {options.map((opt) => (
            <SettingsOption key={opt.title} {...opt} />
          ))}
        </div>

        {/* Content Area - Where you edit things */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[14px] border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold mb-6">General System Settings</h2>
          <div className="space-y-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
              <div>
                <p className="font-semibold">System Audit Logs</p>
                <p className="text-sm text-slate-500">Enable or disable global activity tracking</p>
              </div>
              <button className="px-4 py-2 bg-teal-500 text-white rounded-lg font-bold hover:bg-teal-600">Toggle</button>
            </div>
            
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex justify-between items-center">
              <div>
                <p className="font-semibold">Notification Preferences</p>
                <p className="text-sm text-slate-500">Configure global alert delivery channels</p>
              </div>
              <button className="px-4 py-2 border border-slate-300 rounded-lg font-semibold hover:bg-slate-100">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;