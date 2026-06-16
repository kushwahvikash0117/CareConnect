import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

const AnalyticsReports = () => {
  const componentRef = useRef(null);
  
  const data = [
    { name: 'Mon', v: 40 },
    { name: 'Tue', v: 60 },
    { name: 'Wed', v: 45 },
    { name: 'Thu', v: 80 },
    { name: 'Fri', v: 50 },
    { name: 'Sat', v: 110 }
  ];

  // Print function
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'Welfare-Analytics-Report',
  });

  return (
    <div className="w-full p-8 bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-8 text-slate-800">Analytics & Reports</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Chart Card (Printable) */}
        <div ref={componentRef} className="lg:col-span-3 bg-white border-2 border-slate-300 border-l-[8px] border-l-teal-500 rounded-[14px] p-8 shadow-sm">
          <h2 className="font-bold text-xl mb-6 text-slate-800">Welfare Trends</h2>
          <div className="h-96 w-full"> 
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar 
                  dataKey="v" 
                  fill="#14b8a6" 
                  stroke="#000000" 
                  strokeWidth={2} 
                  barSize={35} 
                  radius={[6, 6, 6, 6]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Stats & Button Card */}
        <div className="lg:col-span-1 bg-white border-2 border-slate-300 border-l-[8px] border-l-teal-500 rounded-[14px] p-8 shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-xl mb-6">Quick Stats</h2>
            <div className="space-y-5">
              <div className="flex justify-between border-b pb-3">
                <span className="text-slate-600">Total Alerts</span>
                <span className="font-bold text-lg">1,240</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="text-slate-600">Pending</span>
                <span className="font-bold text-lg text-orange-500">45</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="text-slate-600">Resolved</span>
                <span className="font-bold text-lg text-teal-600">1,195</span>
              </div>
              <div className="flex justify-between border-b pb-3">
                <span className="text-slate-600">System Health</span>
                <span className="font-bold text-lg text-green-600">98%</span>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => handlePrint()} 
            className="w-full py-4 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition-all mt-8 shadow-md"
          >
            View Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReports;