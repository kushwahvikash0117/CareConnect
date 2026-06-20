const WellnessLog = require('../models/WellnessLog');
const { checkWellness } = require('../services/mlService');

/* ==========================================
   Analyze Wellness
   POST /api/wellness/analyze
========================================== */
const analyzeWellness = async (req, res) => {
  try {
    const { steps, heartRate, sleepHours, medicationTaken } = req.body;

    if (
      steps === undefined ||
      heartRate === undefined ||
      sleepHours === undefined ||
      medicationTaken === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: 'All wellness fields are required',
      });
    }

    // AI Service call
    const result = await checkWellness(
      steps,
      heartRate,
      sleepHours,
      medicationTaken
    );

    // Save to database
    const log = await WellnessLog.create({
      userId: req.user._id,
      steps,
      heartRate,
      sleepHours,
      medicationTaken,
      riskStatus: result.status,
    });

    return res.status(200).json({
      success: true,
      wellness: result,
      log,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ==========================================
   Get Wellness History
   GET /api/wellness/history
========================================== */
const getWellnessHistory = async (req, res) => {
  try {
    const logs = await WellnessLog.find({
      userId: req.user._id,
    }).sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: logs.length,
      logs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeWellness,
  getWellnessHistory,
};