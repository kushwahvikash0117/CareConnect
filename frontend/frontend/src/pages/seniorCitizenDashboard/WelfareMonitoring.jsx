import React, { useEffect, useState } from "react";
import {
  HeartPulse,
  Activity,
  Droplets,
  Pill,
  Moon,
  CheckCircle,
} from "lucide-react";
import { analyzeWellness, getWellnessHistory } from "../../services/api"; // Ensure these are exported from api.js

const WelfareMonitoring = () => {
  const [stats, setStats] = useState({
    heartRate: "N/A",
    bp: "N/A",
    water: "N/A",
    sleep: "N/A",
    wellnessScore: 0,
  });

  useEffect(() => {
  const fetchHealthData = async () => {
    try {
      const res = await getWellnessHistory();

      console.log(res.data);

      if (res.data.logs && res.data.logs.length > 0) {
        const latest = res.data.logs[0];

        setStats({
          heartRate: latest.heartRate || "N/A",
          bp: "N/A",
          water: "N/A",
          sleep: latest.sleepHours || "N/A",
          wellnessScore:
            latest.riskStatus === "Normal"
              ? 90
              : latest.riskStatus === "Medium"
              ? 60
              : 30,
        });
      }
    } catch (error) {
      console.error("Error fetching health data:", error);
    }
  };

  fetchHealthData();
}, []);

  const handleCheckIn = async () => {
    try {
      // Sending status update to the wellness backend
      await analyzeWellness({ status: "Safe", timestamp: new Date() });
      alert("✅ Daily Check-In Completed Successfully");
    } catch (error) {
      alert("Failed to update status. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Welfare Monitoring</h1>
      <p className="text-slate-500 mb-8">Monitor your daily health and wellness status.</p>

      {/* Daily Check-In */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Daily Check-In Status</h2>
        <button
          onClick={handleCheckIn}
          className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold transition"
        >
          I'm Safe
        </button>
      </div>

      {/* Health Stats */}
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        <StatCard icon={<HeartPulse className="text-red-500" size={28} />} title="Heart Rate" value={`${stats.heartRate} BPM`} />
        <StatCard icon={<Activity className="text-blue-500" size={28} />} title="Blood Pressure" value={stats.bp} />
        <StatCard icon={<Droplets className="text-cyan-500" size={28} />} title="Water Intake" value={stats.water} />
        <StatCard icon={<Moon className="text-purple-500" size={28} />} title="Sleep Duration" value={`${stats.sleep} Hours`} />
      </div>

      {/* Wellness Score */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
        <h3 className="font-semibold text-lg mb-4">Wellness Score</h3>
        <div className="w-full bg-slate-200 rounded-full h-4">
          <div 
            className="bg-green-500 h-4 rounded-full transition-all duration-500" 
            style={{ width: `${stats.wellnessScore}%` }}
          ></div>
        </div>
        <p className="mt-3 text-2xl font-bold text-green-600">{stats.wellnessScore}%</p>
      </div>

      {/* Medication Status */}
      <div className="bg-white rounded-3xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <Pill className="text-green-600" />
          <h3 className="font-semibold text-lg">Medication Reminder</h3>
        </div>
        <div className="flex justify-between items-center">
          <span>Morning Medicine</span>
          <span className="flex items-center gap-2 text-green-600 font-medium">
            <CheckCircle size={18} /> Taken
          </span>
        </div>
      </div>
    </div>
  );
};

// Helper component for cleaner UI code
const StatCard = ({ icon, title, value }) => (
  <div className="bg-white rounded-3xl shadow-lg p-6">
    <div className="mb-3">{icon}</div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

export default WelfareMonitoring;