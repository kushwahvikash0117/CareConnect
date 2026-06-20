const User = require('../models/User');
const EmergencyAlert = require('../models/EmergencyAlert');
const FraudReport = require('../models/FraudReport');
const WellnessLog = require('../models/WellnessLog');

/* ==========================================
   Admin Stats
   GET /api/admin/stats
========================================== */
const getAdminStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalSeniors = await User.countDocuments({ role: 'senior' });
    const totalFamilyMembers = await User.countDocuments({ role: 'family' });
    const activeEmergencies = await EmergencyAlert.countDocuments({ status: 'active' });
    const totalFraudReports = await FraudReport.countDocuments();
    const totalWellnessLogs = await WellnessLog.countDocuments();

    return res.status(200).json({
      success: true,
      stats: {
        totalUsers,
        totalSeniors,
        totalFamilyMembers,
        activeEmergencies,
        totalFraudReports,
        totalWellnessLogs,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ==========================================
   Get All Users
   GET /api/admin/users
========================================== */
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select('-password -otp -otpExpiry')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ==========================================
   Get All Emergencies
   GET /api/admin/emergencies
========================================== */
const getAllEmergencies = async (req, res) => {
  try {
    const emergencies = await EmergencyAlert.find()
      .populate('userId', 'name email phone')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: emergencies.length,
      emergencies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ==========================================
   Get All Fraud Reports
   GET /api/admin/fraud-reports
========================================== */
const getAllFraudReports = async (req, res) => {
  try {
    const reports = await FraudReport.find()
      .populate('userId', 'name email phone')
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: reports.length,
      reports,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAdminStats,
  getAllUsers,
  getAllEmergencies,
  getAllFraudReports,
};