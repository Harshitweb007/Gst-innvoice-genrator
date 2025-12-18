const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
require("dotenv").config();

async function createAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const hashedPassword = await bcrypt.hash("blackpanther", 10);

    const admin = await User.create({
      name: "Harshit Admin",
      email: "harshit12@gmail.com",
      password: hashedPassword,
      role: "admin",
      isBlocked: false,
      subscription: {
        plan: "pro",
        isActive: true
      }
    });

    console.log("✅ Admin created:", admin.email);
    process.exit();
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
}

createAdmin();
