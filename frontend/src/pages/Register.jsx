// src/pages/Register.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  sendOTP,
  verifyOTP,
  registerUser,
} from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    phone: "",
    age: "",
    role: "senior",
  });

  const handleSendOTP = async () => {
    if (!email) {
      return alert("Please enter your email");
    }

    try {
      setLoading(true);

      const res = await sendOTP(email);

      alert(
        res.data.message || "OTP sent successfully"
      );

      setStep(2);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp) {
      return alert("Please enter OTP");
    }

    try {
      setLoading(true);

      const res = await verifyOTP(email, otp);

      alert(
        res.data.message ||
          "OTP verified successfully"
      );

      setStep(3);
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Invalid OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        email,
        name: formData.name,
        password: formData.password,
        phone: formData.phone,
        age: Number(formData.age),
        role: formData.role,
      };

      const res = await registerUser(payload);

      alert(
        res.data.message ||
          "Registration Successful"
      );

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create Account
        </h2>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>

            <button
              onClick={handleSendOTP}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              {loading
                ? "Sending OTP..."
                : "Send OTP"}
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter OTP
              </label>

              <input
                type="text"
                placeholder="6-digit OTP"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value)
                }
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>

            <button
              onClick={handleVerifyOTP}
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
            >
              {loading
                ? "Verifying..."
                : "Verify OTP"}
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <form
            onSubmit={handleRegister}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ram Prasad"
                className="w-full mt-1 p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                value={email}
                disabled
                className="w-full mt-1 p-2 border rounded-lg bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full mt-1 p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className="w-full mt-1 p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age
              </label>

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="65"
                className="w-full mt-1 p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              >
                <option value="senior">
                  Senior Citizen
                </option>

                <option value="family">
                  Family Member
                </option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
            >
              {loading
                ? "Registering..."
                : "Register"}
            </button>
          </form>
        )}

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;