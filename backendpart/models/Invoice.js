const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    invoiceNo: String,
    customerName: String,
    date: String,
    items: Array,
    totalAmount: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", InvoiceSchema);
