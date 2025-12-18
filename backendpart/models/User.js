const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true
    },

    // 🔐 ROLE BASED ACCESS
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user"
    },

    // 💳 SUBSCRIPTION INFO
    subscription: {
      plan: {
        type: String,
        enum: ["free", "basic", "pro"],
        default: "free"
      },
      isActive: {
        type: Boolean,
        default: false
      },
      startedAt: Date,
      expiresAt: Date
    },

    // 🟢 USER STATUS (ADMIN CONTROL)
    isBlocked: {
      type: Boolean,
      default: false
    },

    // 💬 SOCKET.IO SUPPORT
    socketId: {
      type: String,
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
