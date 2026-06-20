import React from "react";
import {
  User,
  HeartPulse,
  ShieldCheck,
  Phone,
  MapPin,
  Activity,
  Clock,
  Droplets,
  MessageCircle,
  AlertTriangle,
} from "lucide-react";

const MySeniorProfile = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            My Senior Profile
          </h1>

          <p className="text-slate-500 mt-2">
            Health overview, personal details and recent activities.
          </p>
        </div>

        {/* Profile Banner */}
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-3xl p-8 shadow-xl mb-8">

          <div className="flex flex-col md:flex-row items-center gap-6">

            <div className="w-28 h-28 rounded-full bg-white/20 flex items-center justify-center">
              <User size={50} />
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                Ram Prasad
              </h2>

              <p className="text-cyan-50 mt-1">
                Age: 72 Years
              </p>

              <span className="inline-block mt-3 px-4 py-2 rounded-full bg-emerald-500 text-white text-sm font-medium">
                🟢 Healthy & Active
              </span>
            </div>

          </div>

        </div>

        {/* Health Overview */}
        <div className="grid md:grid-cols-4 gap-5 mb-8">

          <div className="bg-white rounded-3xl p-5 shadow-md">
            <HeartPulse className="text-red-500 mb-3" />
            <h3 className="text-slate-500">
              Health Score
            </h3>
            <p className="text-3xl font-bold text-red-500 mt-2">
              92%
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-md">
            <Clock className="text-blue-500 mb-3" />
            <h3 className="text-slate-500">
              Last Check-In
            </h3>
            <p className="text-xl font-bold mt-2">
              10:30 AM
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-md">
            <ShieldCheck className="text-emerald-500 mb-3" />
            <h3 className="text-slate-500">
              Safety Status
            </h3>
            <p className="text-xl font-bold text-emerald-600 mt-2">
              Safe
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-md">
            <Activity className="text-purple-500 mb-3" />
            <h3 className="text-slate-500">
              Activity Level
            </h3>
            <p className="text-xl font-bold mt-2">
              Active
            </p>
          </div>

        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-3xl shadow-md p-6 mb-8">

          <h3 className="text-2xl font-bold mb-6">
            Personal Information
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <p className="text-slate-500">
                Emergency Contact
              </p>
              <p className="font-semibold flex items-center gap-2 mt-1">
                <Phone size={16} />
                +91 9876543210
              </p>
            </div>

            <div>
              <p className="text-slate-500">
                Blood Group
              </p>
              <p className="font-semibold flex items-center gap-2 mt-1">
                <Droplets size={16} />
                B+
              </p>
            </div>

            <div>
              <p className="text-slate-500">
                Address
              </p>
              <p className="font-semibold flex items-center gap-2 mt-1">
                <MapPin size={16} />
                Sector 14, Jalandhar
              </p>
            </div>

            <div>
              <p className="text-slate-500">
                Medical Condition
              </p>
              <p className="font-semibold mt-1">
                None Reported
              </p>
            </div>

          </div>

        </div>

        {/* Recent Activity Timeline */}
        <div className="bg-white rounded-3xl shadow-md p-6 mb-8">

          <h3 className="text-2xl font-bold mb-6">
            Recent Activity
          </h3>

          <div className="space-y-5">

            <div className="flex gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>

              <div>
                <p className="font-semibold">
                  Morning Check-In Completed
                </p>

                <p className="text-sm text-slate-500">
                  Today • 10:30 AM
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>

              <div>
                <p className="font-semibold">
                  Medication Taken
                </p>

                <p className="text-sm text-slate-500">
                  Today • 9:00 AM
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>

              <div>
                <p className="font-semibold">
                  Location Updated
                </p>

                <p className="text-sm text-slate-500">
                  Today • 8:45 AM
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4">

          <button className="bg-teal-600 hover:bg-teal-700 text-white py-4 rounded-2xl font-medium flex items-center justify-center gap-2">
            <Phone size={18} />
            Call Senior
          </button>

          <button className="bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-medium flex items-center justify-center gap-2">
            <MessageCircle size={18} />
            Message
          </button>

          <button className="bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-medium flex items-center justify-center gap-2">
            <AlertTriangle size={18} />
            Emergency Contact
          </button>

        </div>

      </div>
    </div>
  );
};

export default MySeniorProfile;