const Invoice = require("../models/Invoice");

// ========================
// CREATE INVOICE
// ========================
exports.createInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.create({
      userId: req.user.id, // ✅ FIX HERE
      invoiceData: req.body.invoiceData,
      items: req.body.items,
      taxRates: req.body.taxRates,
      totals: req.body.totals
    });

    res.status(201).json({
      message: "Invoice saved successfully",
      invoice
    });
  } catch (err) {
    console.error("Create invoice error:", err.message);
    res.status(500).json({ message: "Failed to save invoice" });
  }
};

// ========================
// GET MY INVOICES
// ========================
exports.getMyInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({
      userId: req.user.id   // ✅ FIX HERE
    }).sort({ createdAt: -1 });

    res.json(invoices);
  } catch (err) {
    console.error("Get invoices error:", err.message);
    res.status(500).json({ message: "Failed to fetch invoices" });
  }
};
