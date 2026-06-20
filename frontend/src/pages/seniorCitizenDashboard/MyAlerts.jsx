import React, { useEffect, useState } from "react";
import {
  AlertTriangle,
  ShieldAlert,
  PhoneCall,
  CheckCircle,
} from "lucide-react";
import { getMyAlerts } from "../../services/api";

const MyAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const res = await getMyAlerts();

        console.log("Alerts Response:", res.data);

        setAlerts(res.data.alerts || []);
      } catch (error) {
        console.error("Error fetching alerts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  const getAlertConfig = (alert) => {
    if (alert.status === "active") {
      return {
        icon: AlertTriangle,
        borderClass: "border-red-500",
        iconClass: "text-red-500",
      };
    }

    return {
      icon: CheckCircle,
      borderClass: "border-green-500",
      iconClass: "text-green-500",
    };
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading alerts...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 p-6">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        My Alerts
      </h1>

      <p className="text-slate-500 mb-8">
        View your recent emergency alerts and activity.
      </p>

      <div className="space-y-5">
        {alerts.length > 0 ? (
          alerts.map((alert) => {
            const {
              icon: Icon,
              borderClass,
              iconClass,
            } = getAlertConfig(alert);

            return (
              <div
                key={alert._id}
                className={`bg-white rounded-3xl shadow-lg p-6 border-l-8 ${borderClass}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4">
                    <Icon className={iconClass} size={28} />

                    <div>
                      <h3 className="font-bold text-lg text-slate-800">
                        Emergency Alert
                      </h3>

                      <p className="text-slate-600 mt-1">
                        {alert.description?.trim()
                          ? alert.description
                          : "SOS Alert Triggered"}
                      </p>

                      <p className="text-sm text-slate-400 mt-3">
                        {new Date(alert.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      alert.status === "active"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {alert.status}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <p className="text-slate-500">
              No alerts found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAlerts;