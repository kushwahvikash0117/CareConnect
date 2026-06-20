const express = require('express');
const router = express.Router();

// Controllers import
const {
  sendOTP,
  verifyOTP,
  registerUser,
  loginUser,
  getProfile,
} = require('../controllers/authController');

// Middleware import
// Note: Agar aapne middleware file mein { protect } export kiya hai, 
// toh destructuring { protect } ka use karein.
const  protect  = require('../middleware/authMiddleware');

// Routes definition
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route
router.get('/profile', protect, getProfile);

module.exports = router;