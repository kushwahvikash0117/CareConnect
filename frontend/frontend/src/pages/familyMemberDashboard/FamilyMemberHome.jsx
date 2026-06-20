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
} from "lucide-react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

const FamilyMemberHome = () => {
  return (
    <div className="space-y-6">

      {/* Status Banner */}
<div className="relative overflow-hidden bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-600 rounded-3xl p-8 shadow-xl text-white">

  <div className="absolute right-0 top-0 opacity-10 text-[180px]">
    🛡️
  </div>

  <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center">

    <div>
      <h1 className="text-4xl font-bold">
        Mrs. Sharma is Safe
      </h1>

      <p className="text-emerald-50 text-lg mt-2">
        All systems normal and active
      </p>

      <p className="mt-4 flex items-center gap-2">
        ⏱️ Last updated: 2 minutes ago
      </p>
    </div>

    <div className="mt-4 lg:mt-0 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-2xl">
      ❤️ Monitoring Active
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

    <button className="text-slate-500">
      ⚙️ Customize
    </button>
  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">

    <div className="p-5 rounded-2xl border border-teal-100 bg-teal-50 hover:shadow-lg cursor-pointer">
      <div className="text-3xl mb-3">📍</div>
      <h3 className="font-bold">
        Track Location
      </h3>
      <p className="text-slate-500 text-sm">
        View real-time location
      </p>
    </div>

    <div className="p-5 rounded-2xl border border-red-100 bg-red-50 hover:shadow-lg cursor-pointer">
      <div className="text-3xl mb-3">🚨</div>
      <h3 className="font-bold text-red-600">
        Send SOS
      </h3>
      <p className="text-slate-500 text-sm">
        Emergency assistance
      </p>
    </div>

    <div className="p-5 rounded-2xl border border-green-100 bg-green-50 hover:shadow-lg cursor-pointer">
      <div className="text-3xl mb-3">📞</div>
      <h3 className="font-bold">
        Call Senior
      </h3>
      <p className="text-slate-500 text-sm">
        Start voice call
      </p>
    </div>

    <div className="p-5 rounded-2xl border border-blue-100 bg-blue-50 hover:shadow-lg cursor-pointer">
      <div className="text-3xl mb-3">💬</div>
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

<div className="bg-white rounded-3xl p-6 shadow-md">

  <div className="flex items-center justify-between mb-5">

```
<div className="flex items-center gap-3">
  <MapPin className="text-teal-600" size={24} />

  <div>
    <h2 className="text-xl font-bold">
      Current Location
    </h2>

    <p className="text-slate-500 text-sm">
      Real-time tracking enabled
    </p>
  </div>
</div>

<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
  Live
</span>
```

  </div>

  <div className="flex justify-between items-center mb-4">

```
<div>
  <h3 className="text-lg font-bold text-slate-800">
    NIT Jalandhar Campus
  </h3>

  <p className="text-slate-500">
    Updated 2 minutes ago
  </p>
</div>

<button className="bg-teal-50 text-teal-600 px-4 py-2 rounded-xl hover:bg-teal-100">
  View Full Map
</button>
```

  </div>

  <div className="h-64 rounded-2xl overflow-hidden border border-slate-200">

```
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
```
<div className="bg-white rounded-3xl p-6 shadow-md">

  <h3 className="text-xl font-bold mb-5">
    Tracking Details
  </h3>

  <div className="space-y-4">

    <div>
      <p className="text-slate-500">
        Current Speed
      </p>
      <p className="font-bold text-xl">
        2.1 km/h
      </p>
    </div>

    <div>
      <p className="text-slate-500">
        Last Movement
      </p>
      <p className="font-bold">
        5 minutes ago
      </p>
    </div>

    <div>
      <p className="text-slate-500">
        Tracking Status
      </p>

      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
        Active
      </span>
    </div>

  </div>

</div>

<div className="bg-white rounded-3xl p-6 shadow-md">

  <h3 className="text-xl font-bold mb-4">
    🛡 Safe Zone Status
  </h3>

  <div className="bg-green-50 border border-green-200 rounded-2xl p-4">

    <h4 className="font-semibold text-green-700">
      Inside Safe Zone
    </h4>

    <p className="text-slate-500 mt-2">
      No alerts triggered.
    </p>

  </div>

</div>
  </div>

  <div className="mt-4 grid grid-cols-2 gap-3">

```
<div className="bg-slate-50 rounded-xl p-3">
  <p className="text-sm text-slate-500">
    Safe Zone
  </p>

  <p className="font-semibold text-green-600">
    Inside Zone
  </p>
</div>

<div className="bg-slate-50 rounded-xl p-3">
  <p className="text-sm text-slate-500">
    Last Movement
  </p>

  <p className="font-semibold">
    5 mins ago
  </p>
</div>
```

  </div>

</div>


          


      {/* Overview Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="text-emerald-500" />
            <h2 className="text-xl font-bold">
              Safety Status
            </h2>
          </div>

          <p className="text-emerald-600 font-semibold">
            No emergency incidents detected
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <Users className="text-teal-500" />
            <h2 className="text-xl font-bold">
              Caregivers Connected
            </h2>
          </div>

          <p className="text-3xl font-bold text-teal-600">
            4
          </p>
        </div>

      </div>

    </div>
  );
};

export default FamilyMemberHome;