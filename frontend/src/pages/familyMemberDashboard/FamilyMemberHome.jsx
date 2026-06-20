import React from "react";
import {
  HeartPulse,
  MapPin,
  Battery,
  Bell,
  ShieldCheck,
  Users,
  Clock,
  Activity,
  Clock3,
  Phone,
  MessageCircle,
  AlertTriangle,
  Settings,
  ExternalLink,
  Navigation,
  

} from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

const FamilyMemberHome = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">

      {/* Status Banner */}
<div className="relative overflow-hidden bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-600 rounded-3xl p-8 shadow-xl text-white">

  <div className="absolute right-6 top-4 opacity-10">
  <ShieldCheck size={180} />
</div>

  <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center">

    <div>
      <h1 className="text-4xl font-bold">
        Mrs. Sharma is Safe
      </h1>

      <p className="text-emerald-50 text-lg mt-2">
        All systems normal and active
      </p>

      <p className="mt-4 flex items-center gap-2 text-emerald-50">
  <Clock3 size={18} />
  Last updated: 2 minutes ago
</p>
    </div>

     <div className="mt-4 lg:mt-0 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl flex items-center gap-2">
  <HeartPulse size={18} color="rgba(233, 34, 34, 0.9)" />
  Monitoring Active
</div>
  </div>

</div>

      {/* Health Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

  <div className="bg-white rounded-3xl p-6 shadow-md">
    <HeartPulse className="text-red-500 mb-4" size={32}/>
    <h2 className="text-4xl font-bold">72</h2>
    <p className="text-slate-500">Heart Rate</p>

    <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
      BPM
    </span>
  </div>

  <div className="bg-white rounded-3xl p-6 shadow-md">
    <Battery className="text-green-500 mb-4" size={32}/>
    <h2 className="text-4xl font-bold">85%</h2>
    <p className="text-slate-500">Device Battery</p>

    <div className="w-full h-2 bg-slate-200 rounded-full mt-4">
      <div className="w-[85%] h-full bg-green-500 rounded-full"></div>
    </div>
  </div>

  <div className="bg-white rounded-3xl p-6 shadow-md">
    <Activity className="text-blue-500 mb-4" size={32}/>
    <h2 className="text-4xl font-bold">4321</h2>
    <p className="text-slate-500">Steps Today</p>
  </div>

  <div className="bg-white rounded-3xl p-6 shadow-md">
    <Clock className="text-purple-500 mb-4" size={32}/>
    <h2 className="text-4xl font-bold">7.2h</h2>
    <p className="text-slate-500">Sleep Duration</p>
  </div>

</div>

      {/* Quick Actions */}
<div className="bg-white rounded-3xl p-6 shadow-md">

  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold">
      Quick Actions
    </h2>

    <button
      onClick={() => navigate("/fdashboard/settings")}
      className="flex items-center gap-2 text-slate-500 hover:text-teal-600 transition"
    >
      <Settings size={18} />
      Customize
    </button>
  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

    <div
      onClick={() => navigate("/fdashboard/location")}
      className="p-5 rounded-2xl border border-teal-100 bg-teal-50 hover:shadow-lg cursor-pointer transition"
    >
      <MapPin
        size={32}
        className="text-teal-600 mb-3"
      />

      <h3 className="font-bold">
        Track Location
      </h3>

      <p className="text-slate-500 text-sm">
        View real-time location
      </p>
    </div>

    <div
      onClick={() => navigate("/fdashboard/alerts")}
      className="p-5 rounded-2xl border border-red-100 bg-red-50 hover:shadow-lg cursor-pointer transition"
    >
      <AlertTriangle
        size={32}
        className="text-red-600 mb-3"
      />

      <h3 className="font-bold text-red-600">
        Send SOS
      </h3>

      <p className="text-slate-500 text-sm">
        Emergency assistance
      </p>
    </div>

    <div
      onClick={() => navigate("/fdashboard/profile")}
      className="p-5 rounded-2xl border border-green-100 bg-green-50 hover:shadow-lg cursor-pointer transition"
    >
      <Phone
        size={32}
        className="text-green-600 mb-3"
      />

      <h3 className="font-bold">
        Call Senior
      </h3>

      <p className="text-slate-500 text-sm">
        Start voice call
      </p>
    </div>

    <div
      onClick={() => navigate("/fdashboard/communication")}
      className="p-5 rounded-2xl border border-blue-100 bg-blue-50 hover:shadow-lg cursor-pointer transition"
    >
      <MessageCircle
        size={32}
        className="text-blue-600 mb-3"
      />

      <h3 className="font-bold">
        Message Senior
      </h3>

      <p className="text-slate-500 text-sm">
        Send a message
      </p>
    </div>

  </div>

</div>

      {/* Location + Alerts */}

<div className="grid lg:grid-cols-3 gap-6">

  {/* Map Card */}
  <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-md">

    <div className="flex items-center justify-between mb-5">

      <div className="flex items-center gap-3">
        <MapPin
          className="text-teal-600"
          size={24}
        />

        <div>
          <h2 className="text-xl font-bold">
            Current Location
          </h2>

          <p className="text-slate-500 text-sm">
            Real-time tracking enabled
          </p>
        </div>
      </div>

      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
        LIVE
      </span>

    </div>

    <div className="flex justify-between items-center mb-4">

      <div>
        <h3 className="text-lg font-bold text-slate-800">
          NIT Jalandhar Campus
        </h3>

        <p className="text-slate-500">
          Updated 2 minutes ago
        </p>
      </div>

     <button
  onClick={() =>
    window.open(
      "https://maps.google.com/?q=31.3260,75.5762",
      "_blank"
    )
  }
  className="flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-xl hover:bg-teal-100"
>
  <ExternalLink size={18} />
  View Full Map
</button>

    </div>

    <div className="h-72 rounded-2xl overflow-hidden border border-slate-200">

      <MapContainer
        center={[31.3260, 75.5762]}
        zoom={14}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[31.3260, 75.5762]}>
          <Popup>
            Current Senior Location
          </Popup>
        </Marker>
      </MapContainer>

    </div>

  </div>

  {/* Tracking Panel */}
  <div className="space-y-6">

    <div className="bg-white rounded-3xl p-6 shadow-md">

      <h3 className="text-xl font-bold mb-5">
        Tracking Details
      </h3>

      <div className="space-y-5">

        <div className="flex items-center gap-3">
          <Activity
            size={20}
            className="text-blue-500"
          />

          <div>
            <p className="text-slate-500 text-sm">
              Current Speed
            </p>

            <p className="font-bold">
              2.1 km/h
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Clock3
            size={20}
            className="text-orange-500"
          />

          <div>
            <p className="text-slate-500 text-sm">
              Last Movement
            </p>

            <p className="font-bold">
              5 minutes ago
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Navigation
            size={20}
            className="text-teal-500"
          />

          <div>
            <p className="text-slate-500 text-sm">
              Tracking Status
            </p>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              Active
            </span>
          </div>
        </div>

      </div>

    </div>

    <div className="bg-white rounded-3xl p-6 shadow-md">

      <div className="flex items-center gap-3 mb-4">
        <ShieldCheck
          size={22}
          className="text-green-600"
        />

        <h3 className="text-xl font-bold">
          Safe Zone Status
        </h3>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-2xl p-4">

        <h4 className="font-semibold text-green-700">
          Inside Safe Zone
        </h4>

        <p className="text-slate-500 mt-2">
          No alerts triggered
        </p>

      </div>

    </div>

  </div>

</div>

          


      {/* Overview Cards */}
      {/* Overview Cards */}
<div className="grid lg:grid-cols-2 gap-6">

  {/* Safety Status */}
  <div className="bg-white rounded-3xl p-6 shadow-md border border-emerald-100">

    <div className="flex justify-between items-center mb-4">

      <div className="flex items-center gap-3">
        <ShieldCheck
          className="text-emerald-500"
          size={28}
        />

        <div>
          <h2 className="text-xl font-bold">
            Safety Status
          </h2>

          <p className="text-slate-500 text-sm">
            Real-time monitoring
          </p>
        </div>
      </div>

      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
        Safe
      </span>

    </div>

    <p className="text-slate-600">
      No emergency incidents detected in the last 24 hours.
    </p>

    <div className="mt-4 h-2 bg-slate-200 rounded-full">
      <div className="w-[100%] h-full bg-emerald-500 rounded-full"></div>
    </div>

  </div>

  {/* Caregivers */}
  <div className="bg-white rounded-3xl p-6 shadow-md border border-teal-100">

    <div className="flex justify-between items-center mb-4">

      <div className="flex items-center gap-3">
        <Users
          className="text-teal-500"
          size={28}
        />

        <div>
          <h2 className="text-xl font-bold">
            Caregivers Connected
          </h2>

          <p className="text-slate-500 text-sm">
            Family support network
          </p>
        </div>
      </div>

      <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">
        Active
      </span>

    </div>

    <div className="flex items-end gap-3">

      <p className="text-5xl font-bold text-teal-600">
        4
      </p>

      <p className="text-slate-500 mb-2">
        Connected Members
      </p>

    </div>

    <button
      onClick={() => navigate("/fdashboard/members")}
      className="mt-4 bg-teal-50 text-teal-600 px-4 py-2 rounded-xl hover:bg-teal-100 transition"
    >
      View Members
    </button>

  </div>

</div>

    </div>
  );
};

export default FamilyMemberHome;