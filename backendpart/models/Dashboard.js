const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    totalPurchaseDue: Number,
    totalSalesDue: Number,
    totalSaleAmount: Number,
    customers: Number,
    suppliers: Number,
    purchaseInvoices: Number,
    salesInvoices: Number,
    salesBreakdown: [
      {
        name: String,
        value: Number
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dashboard", dashboardSchema);
