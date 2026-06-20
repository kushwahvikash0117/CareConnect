import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT Token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ================= AUTH =================

export const sendOTP = (email) => API.post("/auth/send-otp", { email });

export const verifyOTP = (email, otp) => API.post("/auth/verify-otp", { email, otp });

export const registerUser = (data) => API.post("/auth/register", data);

export const loginUser = (data) => API.post("/auth/login", data);

export const getProfile = () => API.get("/auth/profile");

// ================= ADMIN =================

export const getAdminStats = () => API.get("/admin/stats");

export const getAllUsers = () => API.get("/admin/users");

export const getAllEmergencies = () => API.get("/admin/emergencies");

export const getAllFraudReports = () => API.get("/admin/fraud-reports");

// ================= EMERGENCY =================

export const triggerSOS = (data) => API.post("/emergency/sos", data);

export const getMyAlerts = () => API.get("/emergency/my-alerts");

export const resolveAlert = (id) => API.patch(`/emergency/${id}/resolve`);

// ================= FAMILY =================

export const getFamilyDashboard = () => API.get("/family/dashboard");

export const getFamilyAlerts = () => API.get("/family/alerts");

export const getSeniorLocation = (seniorId) => API.get(`/family/location/${seniorId}`);

// Family Members

export const getFamilyMembers = () => API.get("/family/members");

export const addFamilyMember = (data) => API.post("/family/members", data);

export const deleteFamilyMember = (id) => API.delete(`/family/members/${id}`);

// ================= FRAUD =================

export const checkSMSFraud = (message) =>
  API.post("/fraud/check-sms", { message });

export const checkCallFraud = (phone_number, transcript) =>
  API.post("/fraud/check-call", {
    phone_number,
    transcript,
  });

export const getFraudHistory = () => API.get("/fraud/history");

// ================= WELLNESS =================

export const analyzeWellness = (data) => API.post("/wellness/analyze", data);

export const getWellnessHistory = () => API.get("/wellness/history");

export default API;
