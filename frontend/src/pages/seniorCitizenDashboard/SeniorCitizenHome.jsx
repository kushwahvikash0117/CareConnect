// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Bell,
//   User,
//   ShieldAlert,
//   HeartPulse,
//   FileWarning,
//   Phone,
//   CheckCircle,
// } from "lucide-react";

// const SeniorCitizenHome = () => {
//   const navigate = useNavigate();

//   const handleSOS = () => {
//   alert("🚨 Emergency Alert Sent Successfully!");
// };

// const handleNotification = () => {
//   alert("No New Notifications");
// };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">

//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-3xl font-bold text-slate-800">
//             Good Morning 👋
//           </h1>
//           <p className="text-lg text-slate-600">
//             Ram Prasad
//           </p>
//         </div>

//         <button
//   onClick={handleNotification}
//   className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition"
// >
//   <Bell size={22} />
// </button>
//       </div>

//       {/* Emergency Info Card */}
//       <div className="bg-white rounded-3xl p-6 shadow-lg mb-8 border border-slate-100">
//         <h2 className="text-2xl font-bold text-slate-800">
//           Emergency Assistance
//         </h2>

//         <p className="text-slate-500 mt-2">
//           Tap the SOS button to instantly notify family members and caregivers.
//         </p>
//       </div>

//       {/* SOS Button */}
//       <div className="flex justify-center mb-10">
//         <button
//   onClick={handleSOS}

  
//   className="w-60 h-60 bg-red-600 rounded-full text-white shadow-2xl hover:scale-105 transition duration-300 flex flex-col justify-center items-center border-[10px] border-red-300 animate-pulse"
// >
//           <span className="text-5xl font-bold">
//             SOS
//           </span>

//           <span className="text-sm mt-3 font-medium">
//             Emergency Help
//           </span>
//         </button>
//       </div>

//       {/* Quick Actions */}
//       <div className="grid grid-cols-2 gap-4 mb-8">

//         <div
//           onClick={() => navigate("/sdashboard/profile")}
//           className="bg-white rounded-2xl shadow-md p-5 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
//         >
//           <User className="text-blue-600 mb-3" />
//           <h3 className="font-semibold text-slate-800">
//             My Profile
//           </h3>
//           <p className="text-sm text-slate-500 mt-1">
//             View personal details
//           </p>
//         </div>

//         <div
//           onClick={() => navigate("/sdashboard/alerts")}
//           className="bg-white rounded-2xl shadow-md p-5 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
//         >
//           <ShieldAlert className="text-orange-600 mb-3" />
//           <h3 className="font-semibold text-slate-800">
//             My Alerts
//           </h3>
//           <p className="text-sm text-slate-500 mt-1">
//             Check alert history
//           </p>
//         </div>

//         <div
//           onClick={() => navigate("/sdashboard/welfare")}
//           className="bg-white rounded-2xl shadow-md p-5 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
//         >
//           <HeartPulse className="text-green-600 mb-3" />
//           <h3 className="font-semibold text-slate-800">
//             Health & Wellness
//           </h3>
//           <p className="text-sm text-slate-500 mt-1">
//             Monitor your health
//           </p>
//         </div>

//         <div
//           onClick={() => navigate("/sdashboard/fraud")}
//           className="bg-white rounded-2xl shadow-md p-5 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
//         >
//           <FileWarning className="text-red-600 mb-3" />
//           <h3 className="font-semibold text-slate-800">
//             Report Fraud
//           </h3>
//           <p className="text-sm text-slate-500 mt-1">
//             Report suspicious activity
//           </p>
//         </div>

//       </div>

//       {/* Action Buttons */}
//       <div className="grid md:grid-cols-2 gap-4 mb-8">

//         <button className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-semibold transition">
//           <Phone size={18} />
//           Call Family
//         </button>

//         <button className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition">
//           Safe Status
//         </button>

//       </div>

//       {/* Health Section */}
//       <div className="grid md:grid-cols-2 gap-4">

//         <div className="bg-white rounded-2xl shadow-md p-6">
//           <div className="flex items-center gap-2 mb-3">
//             <CheckCircle className="text-green-600" />
//             <h3 className="font-semibold text-slate-800">
//               Today's Check-In
//             </h3>
//           </div>

//           <p className="text-green-600 font-semibold">
//             Completed Successfully
//           </p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-md p-6">
//           <h3 className="font-semibold text-slate-800 mb-3">
//             Wellness Score
//           </h3>

//           <div className="w-full bg-slate-200 rounded-full h-4">
//             <div className="bg-green-500 h-4 rounded-full w-[85%]"></div>
//           </div>

//           <p className="mt-3 text-2xl font-bold text-green-600">
//             85%
//           </p>
//         </div>

//       </div>

//       {/* Recent Alerts */}
//       <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
//         <h3 className="font-bold text-lg text-slate-800 mb-4">
//           Recent Alerts
//         </h3>

//         <div className="flex justify-between items-center py-3 border-b">
//           <span>SOS Alert</span>
//           <span className="text-green-600 font-medium">
//             Resolved
//           </span>
//         </div>

//         <div className="flex justify-between items-center py-3 border-b">
//           <span>Suspicious Call</span>
//           <span className="text-yellow-600 font-medium">
//             Pending
//           </span>
//         </div>

//         <div className="flex justify-between items-center py-3">
//           <span>Health Check</span>
//           <span className="text-green-600 font-medium">
//             Completed
//           </span>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default SeniorCitizenHome;


import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  User,
  ShieldAlert,
  HeartPulse,
  FileWarning,
  Phone,
  CheckCircle,
} from "lucide-react";

const SeniorCitizenHome = () => {
  const navigate = useNavigate();

  const handleSOS = () => {
    alert("🚨 Emergency Alert Sent Successfully!");
  };

  const handleNotification = () => {
    alert("No New Notifications");
  };

  const handleCallFamily = () => {
    alert("Calling Amit Prasad...");
  };

  const handleSafeStatus = () => {
    alert("You are marked as Safe");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Good Morning 👋
          </h1>

          <p className="text-lg text-slate-600">
            Ram Prasad
          </p>
        </div>

        <button
          onClick={handleNotification}
          className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition"
        >
          <Bell size={22} />
        </button>
      </div>

      {/* Emergency Card */}
      <div className="bg-white rounded-3xl p-6 shadow-lg mb-8 border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800">
          Emergency Assistance
        </h2>

        <p className="text-slate-500 mt-2">
          Tap the SOS button to instantly notify family members and caregivers.
        </p>
      </div>

      {/* SOS */}
      <div className="flex justify-center mb-10">
        <button
          onClick={handleSOS}
          className="w-60 h-60 bg-red-600 rounded-full text-white shadow-2xl hover:scale-105 transition duration-300 flex flex-col justify-center items-center border-[10px] border-red-300 animate-pulse"
        >
          <span className="text-5xl font-bold">
            SOS
          </span>

          <span className="text-sm mt-3 font-medium">
            Emergency Help
          </span>
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-8">

        <div
          onClick={() => navigate("/sdashboard/profile")}
          className="bg-white rounded-2xl shadow-md p-5 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
        >
          <User className="text-blue-600 mb-3" />

          <h3 className="font-semibold text-slate-800">
            My Profile
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            View personal details
          </p>
        </div>

        <div
          onClick={() => navigate("/sdashboard/alerts")}
          className="bg-white rounded-2xl shadow-md p-5 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
        >
          <ShieldAlert className="text-orange-600 mb-3" />

          <h3 className="font-semibold text-slate-800">
            My Alerts
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Check alert history
          </p>
        </div>

        <div
          onClick={() => navigate("/sdashboard/welfare")}
          className="bg-white rounded-2xl shadow-md p-5 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
        >
          <HeartPulse className="text-green-600 mb-3" />

          <h3 className="font-semibold text-slate-800">
            Health & Wellness
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Monitor your health
          </p>
        </div>

        <div
          onClick={() => navigate("/sdashboard/fraud")}
          className="bg-white rounded-2xl shadow-md p-5 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
        >
          <FileWarning className="text-red-600 mb-3" />

          <h3 className="font-semibold text-slate-800">
            Report Fraud
          </h3>

          <p className="text-sm text-slate-500 mt-1">
            Report suspicious activity
          </p>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">

        <button
          onClick={handleCallFamily}
          className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-semibold transition"
        >
          <Phone size={18} />
          Call Family
        </button>

        <button
          onClick={handleSafeStatus}
          className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
        >
          Safe Status
        </button>

      </div>

      {/* Health Cards */}
      <div className="grid md:grid-cols-2 gap-4">

        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="text-green-600" />

            <h3 className="font-semibold text-slate-800">
              Today's Check-In
            </h3>
          </div>

          <p className="text-green-600 font-semibold">
            Completed Successfully
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="font-semibold text-slate-800 mb-3">
            Wellness Score
          </h3>

          <div className="w-full bg-slate-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full w-[85%]"></div>
          </div>

          <p className="mt-3 text-2xl font-bold text-green-600">
            85%
          </p>
        </div>

      </div>

      {/* Recent Alerts */}
      <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
        <h3 className="font-bold text-lg text-slate-800 mb-4">
          Recent Alerts
        </h3>

        <div className="flex justify-between items-center py-3 border-b">
          <span>SOS Alert</span>
          <span className="text-green-600 font-medium">
            Resolved
          </span>
        </div>

        <div className="flex justify-between items-center py-3 border-b">
          <span>Suspicious Call</span>
          <span className="text-yellow-600 font-medium">
            Pending
          </span>
        </div>

        <div className="flex justify-between items-center py-3">
          <span>Health Check</span>
          <span className="text-green-600 font-medium">
            Completed
          </span>
        </div>
      </div>

    </div>
  );
};

export default SeniorCitizenHome;