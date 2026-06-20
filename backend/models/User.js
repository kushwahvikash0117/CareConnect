const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
      min: 1,
    },
    role: {
      type: String,
      enum: ['senior', 'family', 'admin'],
      default: 'senior',
    },
    profileImage: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
    emergencyContact: {
      type: String,
      default: '',
    },
    location: {
      latitude: {
        type: Number,
        default: null,
      },
      longitude: {
        type: Number,
        default: null,
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    // OTP Verification Fields
    isVerified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
      default: null,
    },
    otpExpiry: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;