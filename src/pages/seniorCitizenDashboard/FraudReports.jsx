import React, { useState } from "react";
import { ShieldAlert } from "lucide-react";
import { checkCallFraud } from "../../services/api"; // Aapki service file se import

const FraudReports = () => {
  const [fraudType, setFraudType] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fraudType || !phone) {
      alert("Please fill in the required fields");
      return;
    }

    setLoading(true);
    try {
      // API call using your api.js service
      const response = await checkCallFraud(phone, description);

      if (response.data.success) {
        alert(`✅ Fraud Report Submitted! Status: ${response.data.report.status}`);
        setFraudType("");
        setPhone("");
        setDescription("");
      }
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">
      {/* UI Remains exactly the same */}
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Report Fraud & Scam</h1>
      <p className="text-slate-500 mb-8">Report suspicious calls, messages and scam attempts.</p>

      <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-5">Submit New Report</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            value={fraudType}
            onChange={(e) => setFraudType(e.target.value)}
            className="w-full p-4 border rounded-xl"
            required
          >
            <option value="">Select Fraud Type</option>
            <option value="call">Phone Scam</option>
            <option value="bank">Bank Fraud</option>
            <option value="otp">OTP Scam</option>
            <option value="insurance">Fake Insurance Call</option>
            <option value="other">Online Fraud</option>
          </select>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Fraudster Phone Number"
            className="w-full p-4 border rounded-xl"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the incident..."
            className="w-full p-4 border rounded-xl h-36"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'} text-white py-4 rounded-xl font-semibold transition`}
          >
            {loading ? "Processing..." : "Submit & Check Fraud"}
          </button>
        </form>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <ShieldAlert className="text-blue-600" />
          <h2 className="text-xl font-semibold">Safety Tips</h2>
        </div>
        <ul className="space-y-2 text-slate-600">
          <li>• Never share OTPs or passwords with unknown callers.</li>
          <li>• Verify bank calls before sharing any personal information.</li>
          <li>• Avoid clicking suspicious links in SMS or Emails.</li>
        </ul>
      </div>
    </div>
  );
};

export default FraudReports;