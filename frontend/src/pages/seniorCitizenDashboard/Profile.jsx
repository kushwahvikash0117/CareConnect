import React from "react";
import {
  User,
  Phone,
  MapPin,
  Heart,
  Users,
  Pencil,
  ShieldCheck,
  Clock,
} from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">

      {/* Title */}
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        My Profile
      </h1>

      {/* Profile Header Card */}
      <div className="bg-white rounded-3xl shadow-lg p-8 mb-6">

        <div className="flex flex-col items-center">

          <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <User size={50} className="text-blue-600" />
          </div>

          <h2 className="text-3xl font-bold text-slate-800">
            Ram Prasad
          </h2>

          <p className="text-slate-500 text-lg">
            Senior Citizen • 72 Years
          </p>

          <div className="flex gap-3 mt-4 flex-wrap justify-center">

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <ShieldCheck size={16} />
              Safe
            </span>

            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Clock size={16} />
              Last Check-In: Today
            </span>

          </div>

        </div>

      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">

        <h3 className="text-xl font-semibold mb-5">
          Personal Information
        </h3>

        <div className="space-y-5">

          <div className="flex items-center gap-3">
            <Phone className="text-blue-600" size={20} />
            <span>+91 9876543210</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="text-red-500" size={20} />
            <span>New Delhi, India</span>
          </div>

          <div className="flex items-center gap-3">
            <Heart className="text-pink-500" size={20} />
            <span>Blood Group: O+</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-600" size={20} />
            <span>Medical Status: Healthy</span>
          </div>

        </div>

      </div>

      {/* Emergency Contact */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">

        <h3 className="text-xl font-semibold mb-5">
          Emergency Contact
        </h3>

        <div className="flex items-center gap-3">

          <Users className="text-green-600" size={22} />

          <div>
            <p className="font-semibold text-slate-800">
              Amit Prasad
            </p>

            <p className="text-slate-500">
              Son • +91 9876543210
            </p>
          </div>

        </div>

      </div>

      {/* Edit Button */}
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition">
        <Pencil size={18} />
        Edit Profile
      </button>

    </div>
  );
};

export default Profile;
