import React, { useState } from 'react';

const SeniorCitizensList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false); // Ye track karega ki sab dikhana hai ya nahi

  const seniors = [
    { name: 'Ram Prasad', age: 72, city: 'Ahmedabad', phone: '9876543210' },
    { name: 'Savita Ben', age: 68, city: 'Gandhinagar', phone: '9876543211' },
    { name: 'Harish Mehta', age: 75, city: 'Ahmedabad', phone: '9876543212' },
    { name: 'Suresh Kumar', age: 70, city: 'Surat', phone: '9876543213' },
    { name: 'Geeta Devi', age: 65, city: 'Rajkot', phone: '9876543214' },
    { name: 'Vijay Singh', age: 78, city: 'Vadodara', phone: '9876543215' },
  ];

  // Logic: 
  // 1. Pehle search filter lagao
  // 2. Agar 'showAll' false hai, toh sirf pehle 3 dikhao
  const filteredSeniors = seniors.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedSeniors = showAll ? filteredSeniors : filteredSeniors.slice(0, 3);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Senior Citizens</h2>

      <div className="bg-white border-2 border-slate-300 border-l-[8px] border-l-teal-500 rounded-[14px] p-8 shadow-sm">
        
        <div className="flex justify-center mb-10">
          <input 
            type="text" 
            placeholder="Search senior..." 
            value={searchTerm}
            onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowAll(true); // Search karte hi saare dikhao
            }}
            className="w-full md:w-1/2 p-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-teal-500 transition-all text-center shadow-sm"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {displayedSeniors.length > 0 ? (
            displayedSeniors.map((s, i) => (
              <div key={i} className="flex items-center gap-6 p-6 border border-slate-200 rounded-xl hover:shadow-md transition-all bg-slate-50">
                <div className="bg-teal-100 p-4 rounded-full text-teal-600">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-xl">{s.name}</h3>
                  <p className="text-slate-600">{s.age} yrs | {s.city}</p>
                  <p className="font-semibold text-slate-900 mt-1">{s.phone}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-400">No senior found.</p>
          )}
        </div>

        <div className="mt-10 border-t pt-6 text-center">
          <button 
            onClick={() => setShowAll(!showAll)} // Click karne par toggle hoga
            className="px-10 py-2 border-2 border-slate-200 rounded-lg text-slate-600 font-semibold hover:bg-slate-50 transition-all active:scale-95"
          >
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeniorCitizensList;