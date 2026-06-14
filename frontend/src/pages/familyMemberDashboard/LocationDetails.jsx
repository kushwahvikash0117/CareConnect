import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
const LocationDetails = () => {
return ( <div className="p-6 bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50 min-h-screen">

```
  <div className="mb-8">
    <h1 className="text-4xl font-bold text-slate-800">
      Location Tracking
    </h1>

    <p className="text-slate-500 mt-2">
      Monitor the senior citizen's live location and movement history.
    </p>
  </div>

  {/* Live Tracking Banner */}
  <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-3xl p-6 mb-6 shadow-lg">
    <h2 className="text-2xl font-bold">
      📍 Live Tracking Active
    </h2>

    <p className="mt-2 text-cyan-50">
      Last location received 2 minutes ago.
    </p>
  </div>

  {/* Current Location */}
  <div className="bg-white rounded-3xl shadow-md border border-teal-100 p-6 mb-6">
    <h2 className="text-xl font-semibold mb-4">
      📍 Current Location
    </h2>

    <p className="text-lg font-medium text-slate-800">
      Sector 14, Jalandhar, Punjab
    </p>

    <p className="text-sm text-slate-500 mt-2">
      Last updated: 2 minutes ago
    </p>

    <div className="mt-4">
      <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
        🟢 Inside Safe Zone
      </span>
    </div>
  </div>

  {/* Map Placeholder */}
 {/* Live Map */}
<div className="bg-white rounded-3xl shadow-md border border-teal-100 p-6 mb-6">
  <h2 className="text-xl font-semibold mb-4">
    🗺️ Live Map
  </h2>

  <div className="h-72 rounded-2xl overflow-hidden">
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
          Senior Citizen Current Location
        </Popup>
      </Marker>
    </MapContainer>
  </div>
</div>

  {/* Statistics */}
  <div className="grid md:grid-cols-3 gap-4 mb-6">

    <div className="bg-white rounded-3xl shadow-md p-5">
      <h3 className="text-slate-500">
        🚶 Distance Travelled
      </h3>

      <p className="text-2xl font-bold mt-2">
        4.2 km
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow-md p-5">
      <h3 className="text-slate-500">
        ⏰ Time Outside Home
      </h3>

      <p className="text-2xl font-bold mt-2">
        2h 15m
      </p>
    </div>

    <div className="bg-white rounded-3xl shadow-md p-5">
      <h3 className="text-slate-500">
        🛡️ Safety Status
      </h3>

      <p className="text-2xl font-bold text-emerald-600 mt-2">
        Safe
      </p>
    </div>

  </div>

  {/* Quick Actions */}
  <div className="grid md:grid-cols-3 gap-4 mb-6">

    <button className="bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-2xl font-medium transition">
      📍 View Live Map
    </button>

    <button className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-2xl font-medium transition">
      📞 Call Senior
    </button>

    <button className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-2xl font-medium transition">
      📤 Share Location
    </button>

  </div>

  {/* Location History */}
  <div className="bg-white rounded-3xl shadow-md border border-teal-100 p-6">

    <h2 className="text-xl font-semibold mb-6">
      📋 Recent Location History
    </h2>

    <div className="space-y-5">

      <div className="flex gap-4">
        <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>

        <div>
          <p className="font-semibold">
            Arrived Home
          </p>

          <p className="text-sm text-slate-500">
            Today • 5:15 PM
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>

        <div>
          <p className="font-semibold">
            Visited Community Center
          </p>

          <p className="text-sm text-slate-500">
            Today • 2:00 PM
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>

        <div>
          <p className="font-semibold">
            Left Home
          </p>

          <p className="text-sm text-slate-500">
            Today • 1:10 PM
          </p>
        </div>
      </div>

    </div>
  </div>

</div>

);
};

export default LocationDetails;
