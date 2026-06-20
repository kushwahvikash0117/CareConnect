import React, { useState } from 'react';

const WelfareMonitoring = () => {
  const [showAll, setShowAll] = useState(false);

  const stats = [
    { label: 'Check-ins Completed', value: '980' },
    { label: 'Missed Check-ins', value: '18' },
    { label: 'At Risk Seniors', value: '27' },
    { label: 'Wellness Score Avg', value: '78%' },
  ];

  // Logic: Show all if toggled, else show first 3
  const displayedStats = showAll ? stats : stats.slice(0, 3);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Welfare Monitoring</h1>
      
      <div className="bg-white border-2 border-slate-300 border-l-[8px] border-l-teal-500 rounded-[14px] p-8 shadow-sm">
        
        <div className="space-y-6">
          {displayedStats.map((item, i) => (
            <div key={i} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
              <span className="font-semibold text-slate-700 text-lg">{item.label}</span>
              <span className="font-bold text-slate-900 text-xl">{item.value}</span>
            </div>
          ))}
        </div>

        {/* View Details Button - Green/Teal */}
        <div className="mt-8">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg transition-all shadow-md"
          >
            {showAll ? 'Show Less' : 'View Details'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelfareMonitoring;