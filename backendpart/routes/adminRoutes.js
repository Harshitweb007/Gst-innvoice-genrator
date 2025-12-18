const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

// 📊 Users + invoice count
router.get(
  "/invoice-count",
  authMiddleware,
  adminMiddleware,
  adminController.getUsersWithInvoices
);

// 🚫 Block / Unblock user
router.put(
  "/block-user/:id",
  authMiddleware,
  adminMiddleware,
  adminController.toggleBlockUser
);

// ❌ Delete user
router.delete(
  "/delete-user/:id",
  authMiddleware,
  adminMiddleware,
  adminController.deleteUser
);

module.exports = router;
