import React, { useState } from 'react';

const AlertsMonitor = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [showAll, setShowAll] = useState(false); // New state for view all logic

  const alerts = [
    { name: 'Ram Prasad', type: 'SOS Alert', status: 'Assign', time: '10:30 AM', category: 'SOS' },
    { name: 'Savita Ben', type: 'Missed Check-in', status: 'Assign', time: '09:15 AM', category: 'Check-in' },
    { name: 'Harish Mehta', type: 'Fraud Report', status: 'Investigating', time: '08:20 AM', category: 'Fraud' },
    { name: 'Vijay Singh', type: 'SOS Alert', status: 'Assign', time: '07:45 AM', category: 'SOS' },
    { name: 'Meena Shah', type: 'Missed Check-in', status: 'Assign', time: '06:30 AM', category: 'Check-in' }
  ];

  // 1. Pehle category filter karo
  const filtered = activeTab === 'All' ? alerts : alerts.filter(a => a.category === activeTab);
  
  // 2. Phir limit check karo (showAll false hai toh sirf 3 dikhao)
  const displayedAlerts = showAll ? filtered : filtered.slice(0, 3);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-800">SOS & Incident Monitoring</h1>
      
      <div className="bg-white border-2 border-slate-300 border-l-[8px] border-l-teal-500 rounded-[14px] shadow-sm overflow-hidden">
        
        {/* Tabs */}
        <div className="flex border-b-2 border-slate-200">
          {['All', 'SOS', 'Check-in', 'Fraud'].map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setShowAll(false); }} // Tab change hote hi reset
              className={`px-6 py-4 font-semibold text-sm transition-all ${
                activeTab === tab ? 'border-b-4 border-teal-500 text-teal-600' : 'text-slate-500 hover:text-teal-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* List Content */}
        <div className="divide-y divide-slate-200">
          {displayedAlerts.length > 0 ? (
            displayedAlerts.map((a, i) => (
              <div key={i} className="flex items-center px-6 py-4 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="text-teal-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">{a.name}</div>
                    <div className="text-sm text-slate-600">
                      {a.type} • <span className="font-bold text-slate-900">{a.time}</span>
                    </div>
                  </div>
                </div>
                
                <div className="ml-auto">
                  <button className={`px-4 py-1.5 rounded-lg text-sm font-bold ${
                    a.status === 'Assign' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {a.status}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-slate-400">No alerts found.</div>
          )}
        </div>

        {/* Dynamic View All / Show Less Button */}
        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg transition-all shadow-md"
          >
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertsMonitor;