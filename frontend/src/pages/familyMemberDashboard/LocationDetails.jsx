import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,

} from "react-leaflet";
import { History,  Wifi,
  Navigation,MapPin,Map,Share2, Clock,
  ShieldCheck, } from "lucide-react";

const LocationDetails = () => {
return ( <div className="p-6 bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 min-h-screen">


  <div className="mb-8">
    <h1 className="text-4xl font-bold text-slate-800">
      Location Tracking
    </h1>

    <p className="text-slate-500 mt-2">
      Monitor the senior citizen's live location and movement history.
    </p>
  </div>

{/* Live Tracking Banner */}
<div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white rounded-3xl p-6 mb-6 shadow-xl">

  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

    <div className="flex items-center gap-4">

      <div className="bg-white/20 p-3 rounded-2xl">
        <Navigation size={30} />
      </div>

      <div>
        <h2 className="text-2xl font-bold">
          Live Tracking Active
        </h2>

        <p className="mt-1 text-cyan-100">
          Last location received 2 minutes ago
        </p>
      </div>

    </div>

    <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl">

      <Wifi size={18} />

      <span className="font-medium">
        Connected
      </span>

    </div>

  </div>

</div>

{/* Current Location */}
<div className="bg-white rounded-3xl shadow-lg border border-teal-100 p-6 mb-6">

  <div className="flex justify-between items-start">

    <div>
      <div className="flex items-center gap-3 mb-3">

        <div className="bg-teal-100 p-3 rounded-xl">
          <MapPin className="text-teal-600" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Current Location
          </h2>

          <p className="text-sm text-slate-500">
            Live GPS Tracking
          </p>
        </div>

      </div>

      <p className="text-lg font-semibold text-slate-800">
        Sector 14, Jalandhar, Punjab
      </p>

      <p className="text-sm text-slate-500 mt-2">
        Updated 2 minutes ago
      </p>

    </div>

    <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
      Active
    </span>

  </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
  

    <div className="bg-slate-50 rounded-2xl p-4 text-center">
      <p className="text-slate-500 text-sm">
        Accuracy
      </p>

      <p className="font-bold text-teal-600">
        5m
      </p>
    </div>

    <div className="bg-slate-50 rounded-2xl p-4 text-center">
      <p className="text-slate-500 text-sm">
        Speed
      </p>

      <p className="font-bold text-blue-600">
        2.1 km/h
      </p>
    </div>

    <div className="bg-slate-50 rounded-2xl p-4 text-center">
      <p className="text-slate-500 text-sm">
        Status
      </p>

      <p className="font-bold text-emerald-600">
        Safe
      </p>
    </div>

  </div>

</div>

  {/* Map Placeholder */}
<div className="grid lg:grid-cols-3 gap-6 mb-6">

  <div className="lg:col-span-2 bg-white rounded-3xl shadow-md border border-teal-100 p-6">

    <div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-3">

  <div className="bg-blue-100 p-2 rounded-xl">
    <Map
      className="text-blue-600"
      size={22}
    />
  </div>

  <div>
    <h2 className="text-xl font-bold text-slate-800">
      Live Map
    </h2>

    <p className="text-sm text-slate-500">
      Real-time GPS monitoring
    </p>
  </div>

</div>

  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
    LIVE
  </span>
</div>

    <div className="h-80 rounded-2xl overflow-hidden">
      <MapContainer
        center={[31.3260, 75.5762]}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[31.3260, 75.5762]}>
          <Popup>Senior Citizen Location</Popup>
        </Marker>
      </MapContainer>
    </div>

  </div>

  <div className="bg-white rounded-3xl shadow-md p-6">

    <h2 className="text-xl font-bold mb-5">
      Tracking Details
    </h2>

    <div className="space-y-5">

      <div>
        <p className="text-slate-500">
          Tracking Status
        </p>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
          Active
        </span>
      </div>

      <div>
        <p className="text-slate-500">
          Last Movement
        </p>

        <p className="font-bold">
          5 mins ago
        </p>
      </div>

      <div>
        <p className="text-slate-500">
          Current Speed
        </p>

        <p className="font-bold">
          2.1 km/h
        </p>
      </div>

      <div>
        <p className="text-slate-500">
          Safe Zone
        </p>

        <p className="font-bold text-green-600">
          Inside Zone
        </p>
      </div>

    </div>

  </div>

</div>
<div className="grid md:grid-cols-3 gap-4 mb-6">


  {/* <button className=""> */}
  <button
  onClick={() => window.open(
      "https://maps.google.com/?q=31.3260,75.5762",
      "_blank"
    )}
  className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
>
    <div className="flex items-center justify-center gap-3">
      <Map
        size={22}
        className="group-hover:scale-110 transition"
      />

      <span className="font-semibold">
        Open Full Map
      </span>
    </div>

  </button>

  <button
  onClick={() =>
    navigator.clipboard.writeText(
      "https://maps.google.com/?q=31.3260,75.5762"
    )
  }
  className="group bg-gradient-to-r from-emerald-500 to-green-600 text-white p-5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">


    <div className="flex items-center justify-center gap-3">
      <Share2
        size={22}
        className="group-hover:translate-x-1 transition"
      />

      <span className="font-semibold">
        Share Location
      </span>
    </div>

  </button>

</div>
  {/* Statistics */}
  <div className="grid md:grid-cols-3 gap-4 mb-6">

  <div className="bg-white rounded-3xl p-5 shadow-md">
  <p className="text-slate-500">
    Distance Today
  </p>

  <h2 className="text-4xl font-bold text-teal-600">
    4.2 km
  </h2>

  <div className="mt-3 h-2 bg-slate-200 rounded-full">
    <div className="h-2 w-[70%] bg-teal-500 rounded-full"></div>
  </div>
</div>

<div className="bg-white rounded-3xl shadow-md border border-orange-100 p-5 hover:shadow-lg transition">

  <div className="flex items-center justify-between">

    <div>
      <p className="text-slate-500 text-sm">
        Time Outside Home
      </p>

      <h2 className="text-3xl font-bold text-orange-600 mt-2">
        2h 15m
      </h2>
    </div>

    <div className="bg-orange-100 p-3 rounded-2xl">
      <Clock
        className="text-orange-600"
        size={24}
      />
    </div>

  </div>

  <p className="text-xs text-slate-400 mt-3">
    Today's outdoor activity
  </p>

</div>

<div className="bg-white rounded-3xl shadow-md border border-emerald-100 p-5 hover:shadow-lg transition">

  <div className="flex items-center justify-between">

    <div>
      <p className="text-slate-500 text-sm">
        Safety Status
      </p>

      <h2 className="text-3xl font-bold text-emerald-600 mt-2">
        Safe
      </h2>
    </div>

    <div className="bg-emerald-100 p-3 rounded-2xl">
      <ShieldCheck
        className="text-emerald-600"
        size={24}
      />
    </div>

  </div>

  <p className="text-xs text-slate-400 mt-3">
    No alerts detected
  </p>

</div>

  </div>


  {/* Location History */}
  {/* Location History */}
<div className="bg-white rounded-3xl shadow-md border border-teal-100 p-6">

  <div className="flex items-center justify-between mb-6">

    <div className="flex items-center gap-3">
      <div className="bg-teal-100 p-2 rounded-xl">
        <History
          className="text-teal-600"
          size={22}
        />
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-800">
          Recent Location History
        </h2>

        <p className="text-sm text-slate-500">
          Movement activity for today
        </p>
      </div>
    </div>

    <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm">
      3 Events
    </span>

  </div>

  <div className="relative ml-4">

    <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-200"></div>

    {/* Event 1 */}
    <div className="flex gap-4 pb-8">

      <div className="w-4 h-4 bg-green-500 rounded-full mt-1 z-10"></div>

      <div className="flex-1">

        <div className="flex justify-between items-center">

          <h3 className="font-semibold text-slate-800">
            Arrived Home
          </h3>

          <span className="text-xs text-slate-500">
            5:15 PM
          </span>

        </div>

        <p className="text-sm text-slate-500 mt-1">
          Senior citizen safely returned home.
        </p>

      </div>

    </div>

    {/* Event 2 */}
    <div className="flex gap-4 pb-8">

      <div className="w-4 h-4 bg-blue-500 rounded-full mt-1 z-10"></div>

      <div className="flex-1">

        <div className="flex justify-between items-center">

          <h3 className="font-semibold text-slate-800">
            Community Center Visit
          </h3>

          <span className="text-xs text-slate-500">
            2:00 PM
          </span>

        </div>

        <p className="text-sm text-slate-500 mt-1">
          Stayed for approximately 1 hour 30 minutes.
        </p>

      </div>

    </div>

    {/* Event 3 */}
    <div className="flex gap-4">

      <div className="w-4 h-4 bg-yellow-500 rounded-full mt-1 z-10"></div>

      <div className="flex-1">

        <div className="flex justify-between items-center">

          <h3 className="font-semibold text-slate-800">
            Left Home
          </h3>

          <span className="text-xs text-slate-500">
            1:10 PM
          </span>

        </div>

        <p className="text-sm text-slate-500 mt-1">
          Started daily outdoor activities.
        </p>

      </div>

    </div>

  </div>

</div>

</div>

);
};

export default LocationDetails;