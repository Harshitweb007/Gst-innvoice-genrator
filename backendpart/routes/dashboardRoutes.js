const express = require("express");
const Invoice = require("../models/Invoice");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const invoices = await Invoice.find({ user: req.user.id });

    let totalSales = 0;
    let totalRevenue = 0;
    let salesDue = 0;

    const customerMap = {};
    const monthMap = {};

    invoices.forEach(inv => {
      const amount = inv.totalAmount || 0;
      totalSales += amount;

      // Paid vs Pending
      if (inv.status === "Paid") {
        totalRevenue += amount;
      } else {
        salesDue += amount;
      }

      // Customer-wise
      const customer = inv.customerName || "Unknown";
      customerMap[customer] = (customerMap[customer] || 0) + amount;

      // Monthly (safe date)
      const dateSource = inv.createdAt || inv.date || new Date();
      const monthKey = new Date(dateSource).toISOString().slice(0, 7); // YYYY-MM
      monthMap[monthKey] = (monthMap[monthKey] || 0) + amount;
    });

    // Customer chart
    const salesBreakdown = Object.entries(customerMap).map(
      ([name, value]) => ({ name, value })
    );

    // Monthly chart (sorted)
    const monthlySales = Object.entries(monthMap)
      .sort((a, b) => new Date(a[0]) - new Date(b[0]))
      .map(([key, value]) => ({
        name: new Date(key).toLocaleString("default", {
          month: "short",
          year: "numeric"
        }),
        value
      }));

    res.json({
      totals: {
        purchaseDue: 0,
        salesDue,
        totalSales,
        totalRevenue
      },
      stats: {
        customers: Object.keys(customerMap).length,
        suppliers: 0,
        purchaseInvoices: 0,
        salesInvoices: invoices.length
      },
      salesBreakdown: salesBreakdown || [],
      monthlySales: monthlySales || []
    });

  } catch (err) {
    console.error("Dashboard error:", err);
    res.status(500).json({ message: "Dashboard error" });
  }
});

module.exports = router;
