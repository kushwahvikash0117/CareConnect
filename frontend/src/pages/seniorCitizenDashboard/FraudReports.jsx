import React, { useState } from "react";
import {
  ShieldAlert,
  AlertTriangle,
  FileWarning,
  CheckCircle,
} from "lucide-react";

const FraudReports = () => {
  const [fraudType, setFraudType] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("✅ Fraud Report Submitted Successfully");

    setFraudType("");
    setPhone("");
    setDescription("");
  };

  const handleSafetyTip = () => {
    alert("Never share OTPs, passwords or bank details with unknown callers.");
  };

  const handleReportClick = (reportName) => {
    alert(`Opening Report: ${reportName}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">

      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        Report Fraud & Scam
      </h1>

      <p className="text-slate-500 mb-8">
        Report suspicious calls, messages and scam attempts.
      </p>

      {/* Form */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

        <h2 className="text-xl font-semibold mb-5">
          Submit New Report
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <select
            value={fraudType}
            onChange={(e) => setFraudType(e.target.value)}
            className="w-full p-4 border rounded-xl"
          >
            <option value="">
              Select Fraud Type
            </option>

            <option>Phone Scam</option>
            <option>Bank Fraud</option>
            <option>OTP Scam</option>
            <option>Fake Insurance Call</option>
            <option>Online Fraud</option>
          </select>

          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Fraudster Phone Number"
            className="w-full p-4 border rounded-xl"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the incident..."
            className="w-full p-4 border rounded-xl h-36"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition"
          >
            Submit Report
          </button>

        </form>

      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-3xl shadow-lg p-6">

        <h2 className="text-xl font-semibold mb-5">
          Recent Reports
        </h2>

        <div className="space-y-4">

          <div
            onClick={() =>
              handleReportClick("Suspicious Banking Call")
            }
            className="cursor-pointer flex justify-between items-center border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-xl hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-yellow-600" />

              <div>
                <p className="font-semibold">
                  Suspicious Banking Call
                </p>

                <p className="text-sm text-slate-500">
                  Reported 2 days ago
                </p>
              </div>
            </div>

            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
              Under Review
            </span>
          </div>

          <div
            onClick={() =>
              handleReportClick("OTP Fraud Attempt")
            }
            className="cursor-pointer flex justify-between items-center border-l-4 border-red-500 bg-red-50 p-4 rounded-xl hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <FileWarning className="text-red-600" />

              <div>
                <p className="font-semibold">
                  OTP Fraud Attempt
                </p>

                <p className="text-sm text-slate-500">
                  Reported 5 days ago
                </p>
              </div>
            </div>

            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
              Investigating
            </span>
          </div>

          <div
            onClick={() =>
              handleReportClick("Insurance Scam Alert")
            }
            className="cursor-pointer flex justify-between items-center border-l-4 border-green-500 bg-green-50 p-4 rounded-xl hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-600" />

              <div>
                <p className="font-semibold">
                  Insurance Scam Alert
                </p>

                <p className="text-sm text-slate-500">
                  Reported last week
                </p>
              </div>
            </div>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
              Resolved
            </span>
          </div>

        </div>

      </div>

      {/* Safety Tips */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mt-8">

        <div className="flex items-center gap-3 mb-4">
          <ShieldAlert className="text-blue-600" />

          <h2 className="text-xl font-semibold">
            Safety Tips
          </h2>
        </div>

        <ul className="space-y-2 text-slate-600">

          <li
            onClick={handleSafetyTip}
            className="cursor-pointer hover:text-blue-600"
          >
            • Never share OTPs with unknown callers.
          </li>

          <li
            onClick={handleSafetyTip}
            className="cursor-pointer hover:text-blue-600"
          >
            • Verify bank calls before sharing information.
          </li>

          <li
            onClick={handleSafetyTip}
            className="cursor-pointer hover:text-blue-600"
          >
            • Avoid clicking suspicious links.
          </li>

          <li
            onClick={handleSafetyTip}
            className="cursor-pointer hover:text-blue-600"
          >
            • Report suspicious activity immediately.
          </li>

        </ul>

      </div>

    </div>
  );
};

export default FraudReports;
