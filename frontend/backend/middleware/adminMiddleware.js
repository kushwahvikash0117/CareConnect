// backend/middleware/adminMiddleware.js
const authorize = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin only.",
      });
    }
  };
};

module.exports = authorize;
