import React from "react";
import {
  Phone,
  Video,
  MessageCircle,
  Mic,
  AlertTriangle,
  User,
  UserCircle,
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
    {/* Senior Contact Card */}
<div className="bg-white rounded-3xl p-6 shadow-md mb-8">

  <div className="flex items-center gap-4 mb-6">

    <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center">
      <UserCircle
        size={40}
        className="text-teal-600"
      />
    </div>

    <div>
      <h2 className="text-xl font-bold">
        Ram Prasad
      </h2>

      <p className="text-green-600">
        ● Online
      </p>
    </div>

  </div>

  <div className="grid md:grid-cols-3 gap-4">

    <a
      href="tel:+919876543210"
      className="bg-emerald-500 text-white p-4 rounded-2xl flex justify-center items-center gap-2 hover:bg-emerald-600"
    >
      <Phone size={18} />
      Call
    </a>

    <a
      href="sms:+919876543210"
      className="bg-blue-500 text-white p-4 rounded-2xl flex justify-center items-center gap-2 hover:bg-blue-600"
    >
      <MessageCircle size={18} />
      Message
    </a>

    <button
      onClick={() => alert("Video Call Coming Soon")}
      className="bg-purple-500 text-white p-4 rounded-2xl flex justify-center items-center gap-2 hover:bg-purple-600"
    >
      <Video size={18} />
      Video Call
    </button>

  </div>

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

      <a
  href="tel:+919876543210"
  className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-semibold"
>
  <Phone size={18} />
  Emergency Call
</a>

      </div>

      {/* Recent Messages */}
     <div className="bg-white rounded-3xl shadow-md p-6">

  <h2 className="text-2xl font-bold mb-6">
    Communication Activity
  </h2>

  <div className="space-y-5">

    <div className="flex justify-between items-center border-b pb-4">

      <div>
        <h3 className="font-semibold">
          Voice Call Completed
        </h3>

        <p className="text-sm text-slate-500">
          Duration: 12 minutes
        </p>
      </div>

      <span className="text-sm text-slate-400">
        Today • 10:15 AM
      </span>

    </div>

    <div className="flex justify-between items-center border-b pb-4">

      <div>
        <h3 className="font-semibold">
          SMS Reminder Sent
        </h3>

        <p className="text-sm text-slate-500">
          Medication reminder delivered
        </p>
      </div>

      <span className="text-sm text-slate-400">
        Today • 8:30 AM
      </span>

    </div>

    <div className="flex justify-between items-center">

      <div>
        <h3 className="font-semibold">
          Emergency Contact Check
        </h3>

        <p className="text-sm text-slate-500">
          Contact verified successfully
        </p>
      </div>

      <span className="text-sm text-slate-400">
        Yesterday
      </span>

    </div>

  </div>

</div>

    </div>
  );
};

export default Communication;