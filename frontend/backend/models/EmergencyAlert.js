const mongoose = require('mongoose');

const emergencyAlertSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    location: {
      latitude: Number,
      longitude: Number,
    },
    status: {
      type: String,
      enum: ['active', 'resolved'],
      default: 'active',
    },
    description: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('EmergencyAlert', emergencyAlertSchema);