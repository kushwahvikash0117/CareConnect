const FamilyMember = require('../models/FamilyMember');
const EmergencyAlert = require('../models/EmergencyAlert');
const WellnessLog = require('../models/WellnessLog');
const User = require('../models/User');

/* ==========================================
   Family Dashboard
   GET /api/family/dashboard
========================================== */
const getFamilyDashboard = async (req, res) => {
  try {
    const relations = await FamilyMember.find({ familyMemberId: req.user._id });
    const seniorIds = relations.map((item) => item.seniorId);

    const seniors = await User.find({ _id: { $in: seniorIds } }).select('-password -otp');

    const dashboardData = await Promise.all(
      seniors.map(async (senior) => {
        const latestWellness = await WellnessLog.findOne({ userId: senior._id })
          .sort({ createdAt: -1 });

        const activeSOS = await EmergencyAlert.countDocuments({
          userId: senior._id,
          status: 'active',
        });

        return { senior, latestWellness, activeSOS };
      })
    );

    return res.status(200).json({ success: true, dashboardData });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* ==========================================
   Family Alerts
   GET /api/family/alerts
========================================== */
const getFamilyAlerts = async (req, res) => {
  try {
    const relations = await FamilyMember.find({ familyMemberId: req.user._id });
    const seniorIds = relations.map((item) => item.seniorId);

    const alerts = await EmergencyAlert.find({ userId: { $in: seniorIds } })
      .populate('userId', 'name email phone')
      .sort({ createdAt: -1 });

    return res.status(200).json({ success: true, count: alerts.length, alerts });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* ==========================================
   Senior Location
   GET /api/family/location/:seniorId
========================================== */
const getSeniorLocation = async (req, res) => {
  try {
    const { seniorId } = req.params;

    const relation = await FamilyMember.findOne({
      seniorId,
      familyMemberId: req.user._id,
    });

    if (!relation) {
      return res.status(403).json({ success: false, message: 'Unauthorized access' });
    }

    const senior = await User.findById(seniorId).select('name location');
    if (!senior) {
      return res.status(404).json({ success: false, message: 'Senior not found' });
    }

    return res.status(200).json({ success: true, senior });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getFamilyDashboard,
  getFamilyAlerts,
  getSeniorLocation,
};