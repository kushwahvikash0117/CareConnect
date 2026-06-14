import React from "react";
import {
  Phone,
  Video,
  MessageCircle,
  Mic,
  AlertTriangle,
  User,
} from "lucide-react";

const Communication = () => {
  const recentMessages = [
    {
      sender: "Senior Citizen",
      message: "I have taken my morning medicine.",
      time: "10:15 AM",
      type: "received",
    },
    {
      sender: "Caregiver",
      message: "Please remember your evening walk.",
      time: "Yesterday",
      type: "sent",
    },
    {
      sender: "Senior Citizen",
      message: "Reached home safely.",
      time: "Yesterday",
      type: "received",
    },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 min-h-screen">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Communication Center
        </h1>

        <p className="text-slate-500 mt-2">
          Stay connected with your loved one through calls,
          messages and emergency communication.
        </p>
      </div>

      {/* Senior Card */}
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-3xl p-6 shadow-lg mb-8">

        <div className="flex items-center gap-4">

          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <User size={35} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Ram Prasad
            </h2>

            <p className="text-cyan-50">
              Online • Last active 2 min ago
            </p>
          </div>

        </div>

      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">

        <button className="bg-blue-600 hover:bg-blue-700 text-white p-5 rounded-2xl shadow-md flex flex-col items-center gap-2 transition">
          <Phone size={28} />
          Call Senior
        </button>

        <button className="bg-green-600 hover:bg-green-700 text-white p-5 rounded-2xl shadow-md flex flex-col items-center gap-2 transition">
          <Video size={28} />
          Video Call
        </button>

        <button className="bg-purple-600 hover:bg-purple-700 text-white p-5 rounded-2xl shadow-md flex flex-col items-center gap-2 transition">
          <MessageCircle size={28} />
          Message
        </button>

        <button className="bg-orange-500 hover:bg-orange-600 text-white p-5 rounded-2xl shadow-md flex flex-col items-center gap-2 transition">
          <Mic size={28} />
          Voice Note
        </button>

      </div>

      {/* Emergency Center */}
      <div className="bg-gradient-to-r from-red-500 to-rose-600 text-white rounded-3xl p-6 shadow-lg mb-8">

        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle size={30} />
          <h2 className="text-2xl font-bold">
            Emergency Communication
          </h2>
        </div>

        <p className="text-red-50 mb-5">
          Instantly contact the senior citizen during
          emergencies or send urgent notifications.
        </p>

        <button className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold">
          🚨 Emergency Call
        </button>

      </div>

      {/* Recent Messages */}
      <div className="bg-white rounded-3xl shadow-md p-6">

        <h2 className="text-2xl font-bold mb-6">
          Recent Messages
        </h2>

        <div className="space-y-4">

          {recentMessages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-lg p-4 rounded-2xl ${
                msg.type === "received"
                  ? "bg-slate-100"
                  : "bg-teal-100 ml-auto"
              }`}
            >
              <div className="flex justify-between mb-1">

                <span className="font-semibold text-sm">
                  {msg.sender}
                </span>

                <span className="text-xs text-slate-500">
                  {msg.time}
                </span>

              </div>

              <p className="text-slate-700">
                {msg.message}
              </p>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Communication;