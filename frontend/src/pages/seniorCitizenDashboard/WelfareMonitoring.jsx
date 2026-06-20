import React from "react";
import {
  HeartPulse,
  Activity,
  Droplets,
  Pill,
  Moon,
  CheckCircle,
} from "lucide-react";

const WelfareMonitoring = () => {

  const handleCheckIn = () => {
  alert("✅ Daily Check-In Completed Successfully");
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">

      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        Welfare Monitoring
      </h1>

      <p className="text-slate-500 mb-8">
        Monitor your daily health and wellness status.
      </p>

      {/* Daily Check-In */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-6 text-center">

        <h2 className="text-xl font-semibold mb-4">
          Daily Check-In Status
        </h2>

        <button
  onClick={handleCheckIn}
  className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold transition"
>
  I'm Safe
</button>

      </div>

      {/* Health Stats */}
      <div className="grid md:grid-cols-2 gap-5 mb-6">

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <HeartPulse className="text-red-500 mb-3" size={28} />
          <h3 className="font-semibold text-lg">Heart Rate</h3>
          <p className="text-3xl font-bold mt-2">72 BPM</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <Activity className="text-blue-500 mb-3" size={28} />
          <h3 className="font-semibold text-lg">Blood Pressure</h3>
          <p className="text-3xl font-bold mt-2">120/80</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <Droplets className="text-cyan-500 mb-3" size={28} />
          <h3 className="font-semibold text-lg">Water Intake</h3>
          <p className="text-3xl font-bold mt-2">6 / 8 Glasses</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <Moon className="text-purple-500 mb-3" size={28} />
          <h3 className="font-semibold text-lg">Sleep Duration</h3>
          <p className="text-3xl font-bold mt-2">7.5 Hours</p>
        </div>

      </div>

      {/* Wellness Score */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">

        <h3 className="font-semibold text-lg mb-4">
          Wellness Score
        </h3>

        <div className="w-full bg-slate-200 rounded-full h-4">
          <div className="bg-green-500 h-4 rounded-full w-[88%]"></div>
        </div>

        <p className="mt-3 text-2xl font-bold text-green-600">
          88%
        </p>

      </div>

      {/* Medication Status */}
      <div className="bg-white rounded-3xl shadow-lg p-6">

        <div className="flex items-center gap-3 mb-4">
          <Pill className="text-green-600" />
          <h3 className="font-semibold text-lg">
            Medication Reminder
          </h3>
        </div>

        <div className="flex justify-between items-center">

          <span>Morning Medicine</span>

          <span className="flex items-center gap-2 text-green-600 font-medium">
            <CheckCircle size={18} />
            Taken
          </span>

        </div>

      </div>

    </div>
  );
};

export default WelfareMonitoring;