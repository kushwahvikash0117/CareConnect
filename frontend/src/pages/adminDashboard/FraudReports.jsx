import React, { useState } from 'react';

const FraudReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  
  const reports = [
    { id: 1, title: 'OTP Scam', name: 'Ram Prasad', time: 'May 15, 10:00 AM', status: 'New' },
    { id: 2, title: 'Fake Call', name: 'Savita Ben', time: 'May 14, 09:30 AM', status: 'Investigating' },
    { id: 3, title: 'Investment Scam', name: 'Harish Mehta', time: 'May 13, 11:00 AM', status: 'Closed' },
    { id: 4, title: 'Phishing Link', name: 'Suresh Kumar', time: 'May 12, 02:00 PM', status: 'New' },
    { id: 5, title: 'Card Fraud', name: 'Geeta Devi', time: 'May 11, 09:00 AM', status: 'Investigating' }
  ];

  const filteredReports = reports.filter(r => 
    r.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Initially show 3, else show all
  const displayedReports = showAll ? filteredReports : filteredReports.slice(0, 3);

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold text-slate-800">Fraud Reports</h1>

      {/* Main Container */}
      <div className="bg-white border-2 border-slate-300 border-l-[8px] border-l-teal-500 rounded-[14px] p-8 shadow-sm max-w-2xl mx-auto">
        
        {/* Search Bar */}
        <div className="mb-8">
          <input 
            type="text" 
            placeholder="Search report..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-teal-500 transition-all text-center"
          />
        </div>

        {/* Reports List */}
        <div className="space-y-6">
          {displayedReports.length > 0 ? (
            displayedReports.map((r) => (
              <div key={r.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 p-3 rounded-full text-slate-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{r.title}</h3>
                    <p className="text-sm text-slate-600">{r.name}</p>
                    <p className="text-xs text-slate-400">{r.time}</p>
                  </div>
                </div>

                <span className={`px-4 py-1.5 rounded-lg text-xs font-bold ${
                  r.status === 'New' ? 'bg-yellow-100 text-yellow-700' :
                  r.status === 'Investigating' ? 'bg-blue-100 text-blue-700' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {r.status}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-400">No reports found.</p>
          )}
        </div>

        {/* View All Button - No top border line */}
        <div className="mt-8 text-center">
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

export default FraudReports;