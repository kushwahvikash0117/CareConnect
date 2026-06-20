const mongoose = require('mongoose');

const fraudReportSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      enum: ['sms', 'call', 'email', 'other'],
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    riskScore: {
      type: Number,
      default: 0,
    },
    prediction: {
      type: String,
      default: '',
    },
    confidence: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['safe', 'suspicious', 'fraud'],
      default: 'safe',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('FraudReport', fraudReportSchema);