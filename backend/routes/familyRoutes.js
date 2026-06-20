const express = require('express');
const router = express.Router();

// Controllers import
const {
  getFamilyDashboard,
  getFamilyAlerts,
  getSeniorLocation,
} = require('../controllers/familyController');

// Middleware import
const protect  = require('../middleware/authMiddleware');

// Routes definition
router.get('/dashboard', protect, getFamilyDashboard);

router.get('/alerts', protect, getFamilyAlerts);

router.get('/location/:seniorId', protect, getSeniorLocation);

module.exports = router;