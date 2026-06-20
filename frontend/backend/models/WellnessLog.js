const mongoose = require('mongoose');

const wellnessLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    steps: {
      type: Number,
      required: true,
    },
    heartRate: {
      type: Number,
      required: true,
    },
    sleepHours: {
      type: Number,
      required: true,
    },
    medicationTaken: {
      type: Boolean,
      default: false,
    },
    riskStatus: {
      type: String,
      enum: ['NORMAL', 'ANOMALY_DETECTED'],
      default: 'NORMAL',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('WellnessLog', wellnessLogSchema);