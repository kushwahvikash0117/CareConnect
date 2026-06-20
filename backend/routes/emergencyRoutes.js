const express = require('express');
const router = express.Router();

// Controllers import
const {
  triggerSOS,
  getMyAlerts,
  resolveAlert,
} = require('../controllers/emergencyController');

// Middleware import
// Ensure karein ki aapne { protect } export kiya hai
const  protect  = require('../middleware/authMiddleware');

// Routes definition
router.post('/sos', protect, triggerSOS);

router.get('/my-alerts', protect, getMyAlerts);

router.patch('/:id/resolve', protect, resolveAlert);

module.exports = router;