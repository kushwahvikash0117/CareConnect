import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, CartesianGrid
} from 'recharts';

const AdminHome = () => {
  const [showAll, setShowAll] = useState(false);

  const stats = [
    { title: 'TOTAL SENIORS', value: '1,248' },
    { title: 'ACTIVE ALERTS', value: '27' },
    { title: 'SOS TODAY', value: '8' },
    { title: 'FRAUD REPORTS', value: '35' }
  ];

  const data = [
    { time: '00', val: 2 },
    { time: '08', val: 8 },
    { time: '16', val: 4 },
    { time: '24', val: 9 }
  ];

  const pieData = [
    { name: 'SOS', value: 400 },
    { name: 'Fraud', value: 300 },
    { name: 'Missed', value: 200 }
  ];

  const COLORS = ['#ef4444', '#f59e0b', '#3b82f6'];

  const alerts = [
    { name: 'Ram Prasad', type: 'SOS Alert', status: 'Active', color: 'text-red-600' },
    { name: 'Savita Ben', type: 'Missed Check-in', status: 'Active', color: 'text-red-600' },
    { name: 'Harish Mehta', type: 'Fraud Report', status: 'Investigating', color: 'text-yellow-600' },
    { name: 'Suresh Kumar', type: 'SOS Alert', status: 'Active', color: 'text-red-600' },
    { name: 'Geeta Devi', type: 'Fraud Report', status: 'Resolved', color: 'text-green-600' },
  ];

  const displayedAlerts = showAll ? alerts : alerts.slice(0, 3);

  return (
    <div className="space-y-6 p-6 bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>

      {/* 1. Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white border-2 border-slate-300 border-l-[8px] border-l-teal-500 rounded-[14px] p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
          >
            <h3 className="text-slate-500 text-[14px] font-medium tracking-[0.05em] uppercase">
              {item.title}
            </h3>
            <p className="mt-3.5 text-5xl font-extrabold text-slate-900 tracking-tight">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* 2. Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-[14px] border-2 border-slate-300 shadow-sm h-64">
          <h3 className="text-slate-700 font-bold mb-4 tracking-wide uppercase text-sm">Alerts Overview</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="time" />
              <Tooltip />
              <Line type="monotone" dataKey="val" stroke="#0d9488" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-[14px] border-2 border-slate-300 shadow-sm h-64">
          <h3 className="text-slate-700 font-bold mb-4 tracking-wide uppercase text-sm">Alerts by Type</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={5}>
                {pieData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 3. Recent Alerts Table */}
      <div className="bg-white border-2 border-slate-300 rounded-[14px] p-6 shadow-sm">
        <h3 className="text-slate-700 font-bold mb-4 tracking-wide uppercase text-sm">Recent Alerts</h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-300 text-slate-600">
              <th className="pb-3">Name</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedAlerts.map((alert, idx) => (
              <tr key={idx} className="border-b border-slate-200">
                <td className="py-3">{alert.name}</td>
                <td className="py-3">{alert.type}</td>
                <td className={`py-3 ${alert.color} font-semibold`}>{alert.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 flex justify-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition-all shadow-md"
          >
            {showAll ? 'Hide Alerts' : 'View All Alerts'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;