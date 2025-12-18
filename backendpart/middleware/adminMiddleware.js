module.exports = function (req, res, next) {
  try {
    // authMiddleware must run before this
    if (!req.user) {
      return res.status(401).json({
        message: "Authentication required"
      });
    }

    // 🔐 Role check
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Admin access only"
      });
    }

    next();
  } catch (error) {
    res.status(500).json({
      message: "Admin authorization failed"
    });
  }
};
