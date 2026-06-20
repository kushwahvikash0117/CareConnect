const FraudReport = require('../models/FraudReport');
const { checkPhishing, checkScamCall } = require('../services/mlService');

/* ==========================================
   Check SMS Fraud
   POST /api/fraud/check-sms
========================================== */
const checkSMSFraud = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: 'Message is required',
      });
    }

    const result = await checkPhishing(message);

    const report = await FraudReport.create({
      userId: req.user._id,
      type: 'sms',
      content: message,
      prediction: result.label,
      confidence: result.confidence,
      status: result.label === 'SPAM' ? 'fraud' : 'safe',
    });

    return res.status(200).json({
      success: true,
      report,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ==========================================
   Check Call Fraud
   POST /api/fraud/check-call
========================================== */
const checkCallFraud = async (req, res) => {
  try {
    const { phone_number, transcript } = req.body;

    if (!phone_number || !transcript) {
      return res.status(400).json({
        success: false,
        message: 'Phone number and transcript are required',
      });
    }

    const result = await checkScamCall(phone_number, transcript);

    const report = await FraudReport.create({
      userId: req.user._id,
      type: "call",
      content: transcript,
      confidence: result.confidence,
      prediction: result.prediction,
      status:
        result.prediction.toLowerCase() === "fraud"
          ? "fraud"
          : "safe"
    });

    return res.status(200).json({
      success: true,
      report,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* ==========================================
   Get Fraud History
   GET /api/fraud/history
========================================== */
const getFraudHistory = async (req, res) => {
  try {
    const reports = await FraudReport.find({
      userId: req.user._id,
    }).sort({ createdAt: -1 });

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
  checkSMSFraud,
  checkCallFraud,
  getFraudHistory,
};