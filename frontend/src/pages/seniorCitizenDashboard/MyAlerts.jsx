import React from "react";
import {
  AlertTriangle,
  ShieldAlert,
  PhoneCall,
  CheckCircle,
} from "lucide-react";

const MyAlerts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">

      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        My Alerts
      </h1>

      <p className="text-slate-500 mb-8">
        View your recent emergency alerts and activity.
      </p>

      <div className="space-y-5">

        {/* SOS Alert */}
        <div className="bg-white rounded-3xl shadow-lg p-6 border-l-8 border-red-500">
          <div className="flex justify-between items-center">

            <div className="flex items-center gap-3">
              <AlertTriangle
                className="text-red-500"
                size={26}
              />

              <div>
                <h3 className="font-bold text-lg">
                  SOS Emergency Alert
                </h3>

                <p className="text-slate-500 text-sm">
                  Sent to family members
                </p>
              </div>
            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Resolved
            </span>

          </div>

          <p className="text-sm text-slate-400 mt-4">
            Today • 10:30 AM
          </p>
        </div>

        {/* Suspicious Call */}
        <div className="bg-white rounded-3xl shadow-lg p-6 border-l-8 border-yellow-500">

          <div className="flex justify-between items-center">

            <div className="flex items-center gap-3">
              <PhoneCall
                className="text-yellow-500"
                size={26}
              />

              <div>
                <h3 className="font-bold text-lg">
                  Suspicious Call Alert
                </h3>

                <p className="text-slate-500 text-sm">
                  Unknown caller detected
                </p>
              </div>
            </div>

            <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
              Pending
            </span>

          </div>

          <p className="text-sm text-slate-400 mt-4">
            Yesterday • 07:45 PM
          </p>

        </div>

        {/* Fraud Report */}
        <div className="bg-white rounded-3xl shadow-lg p-6 border-l-8 border-orange-500">

          <div className="flex justify-between items-center">

            <div className="flex items-center gap-3">
              <ShieldAlert
                className="text-orange-500"
                size={26}
              />

              <div>
                <h3 className="font-bold text-lg">
                  Fraud Report Submitted
                </h3>

                <p className="text-slate-500 text-sm">
                  Investigation in progress
                </p>
              </div>
            </div>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Reviewing
            </span>

          </div>

          <p className="text-sm text-slate-400 mt-4">
            2 Days Ago
          </p>

        </div>

        {/* Health Check */}
        <div className="bg-white rounded-3xl shadow-lg p-6 border-l-8 border-green-500">

          <div className="flex justify-between items-center">

            <div className="flex items-center gap-3">
              <CheckCircle
                className="text-green-500"
                size={26}
              />

              <div>
                <h3 className="font-bold text-lg">
                  Daily Health Check
                </h3>

                <p className="text-slate-500 text-sm">
                  Wellness check completed
                </p>
              </div>
            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              Completed
            </span>

          </div>

          <p className="text-sm text-slate-400 mt-4">
            Today • 08:00 AM
          </p>

        </div>

      </div>
    </div>
  );
};

export default MyAlerts;