const express = require('express');
const router = express.Router();

// Controllers import
const {
  analyzeWellness,
  getWellnessHistory,
} = require('../controllers/wellnessController');

// Middleware import
const protect  = require('../middleware/authMiddleware');

// Routes definition
router.post('/analyze', protect, analyzeWellness);

router.get('/history', protect, getWellnessHistory);

module.exports = router;