const express = require('express');
const router = express.Router();

// Controllers import
const {
  getAdminStats,
  getAllUsers,
  getAllEmergencies,
  getAllFraudReports,
} = require('../controllers/adminController');

// Middleware import
const protect = require('../middleware/authMiddleware');
const authorize = require('../middleware/adminMiddleware');

// Routes definition
// Yahan hum 'protect' (auth check) aur 'authorize' (role check) ka use kar rahe hain
router.get('/stats', protect, authorize('admin'), getAdminStats);
router.get('/users', protect, authorize('admin'), getAllUsers);
router.get('/emergencies', protect, authorize('admin'), getAllEmergencies);
router.get('/fraud-reports', protect, authorize('admin'), getAllFraudReports);

module.exports = router;