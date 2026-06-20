const EmergencyAlert = require('../models/EmergencyAlert');
const Notification = require('../models/Notification');
const FamilyMember = require('../models/FamilyMember');
const User = require('../models/User');
const { createNotification } = require('../services/notificationService');

/* ==========================================
   Trigger SOS
   POST /api/emergency/sos
========================================== */
const triggerSOS = async (req, res) => {
  try {
    const { latitude, longitude, description } = req.body;

    const alert = await EmergencyAlert.create({
      userId: req.user._id,
      location: { latitude, longitude },
      description,
      status: 'active',
    });

    const familyMembers = await FamilyMember.find({
      seniorId: req.user._id,
    }).populate('familyMemberId');

    for (const member of familyMembers) {
      await createNotification(
        member.familyMemberId._id,
        '🚨 Emergency Alert',
        `${req.user.name} has triggered an SOS alert.`,
        'emergency'
      );
    }

    return res.status(201).json({
      success: true,
      message: 'SOS alert triggered successfully',
      alert,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* ==========================================
   Get My Alerts
   GET /api/emergency/my-alerts
========================================== */
const getMyAlerts = async (req, res) => {
  try {
    const alerts = await EmergencyAlert.find({
      userId: req.user._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: alerts.length,
      alerts,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* ==========================================
   Resolve Alert
   PATCH /api/emergency/:id/resolve
========================================== */
const resolveAlert = async (req, res) => {
  try {
    const alert = await EmergencyAlert.findById(req.params.id);

    if (!alert) {
      return res.status(404).json({ success: false, message: 'Emergency alert not found' });
    }

    alert.status = 'resolved';
    await alert.save();

    return res.status(200).json({
      success: true,
      message: 'Emergency alert resolved',
      alert,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  triggerSOS,
  getMyAlerts,
  resolveAlert,
};