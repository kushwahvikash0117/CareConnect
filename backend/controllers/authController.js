const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

/* =========================
   Generate JWT
========================= */
const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    }
  );
};

/* =========================
   Nodemailer Transporter
========================= */
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* =========================
   Send OTP
========================= */
const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    let user = await User.findOne({ email });
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    if (!user) {
      user = await User.create({
        name: 'Temp User',
        email,
        password: 'temp123',
        phone: '0000000000',
        age: 1,
        otp,
        otpExpiry,
        isVerified: false,
      });
    } else {
      user.otp = otp;
      user.otpExpiry = otpExpiry;
      await user.save();
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'CareConnect OTP Verification',
      html: `<h2>CareConnect Verification</h2><p>Your OTP is:</p><h1>${otp}</h1><p>Valid for 5 minutes.</p>`,
    });

    return res.status(200).json({ success: true, message: 'OTP sent successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* =========================
   Verify OTP
========================= */
const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.otp !== otp || user.otpExpiry < new Date()) {
      return res.status(400).json({ success: false, message: 'Invalid or expired OTP' });
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    return res.status(200).json({ success: true, message: 'OTP verified successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* =========================
   Register User
========================= */
const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, age, role } = req.body;
    const user = await User.findOne({ email });

    if (!user || !user.isVerified) {
      return res.status(400).json({ success: false, message: 'OTP verification required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.name = name;
    user.password = hashedPassword;
    user.phone = phone;
    user.age = age;
    user.role = role || 'senior';

    await user.save();
    return res.status(201).json({ success: true, message: 'Registration successful' });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* =========================
   Login User
========================= */
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !user.isVerified) {
      return res.status(401).json({ success: false, message: 'Invalid credentials or unverified email' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    return res.status(200).json({
      success: true,
      token: generateToken(user._id),
      user,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/* =========================
   Get Profile
========================= */
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password -otp -otpExpiry');
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  sendOTP,
  verifyOTP,
  registerUser,
  loginUser,
  getProfile,
};