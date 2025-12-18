const Dashboard = require("../models/Dashboard");

exports.getDashboardData = async (req, res) => {
  try {
    const dashboard = await Dashboard.findOne({
      userId: req.user.id   // ✅ FIX HERE
    });

    if (!dashboard) {
      return res.status(404).json({
        message: "No dashboard data found"
      });
    }

    res.json(dashboard);
  } catch (error) {
    console.error("Dashboard error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};
