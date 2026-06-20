const express = require('express');
const router = express.Router();

// Controllers import
const {
  checkSMSFraud,
  checkCallFraud,
  getFraudHistory,
} = require('../controllers/fraudController');

// Middleware import
const  protect  = require('../middleware/authMiddleware');

// Routes definition
router.post('/check-sms', protect, checkSMSFraud);

router.post('/check-call', protect, checkCallFraud);

router.get('/history', protect, getFraudHistory);

module.exports = router;