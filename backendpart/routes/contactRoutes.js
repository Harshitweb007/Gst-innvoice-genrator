const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// POST: Save contact form
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, department, message } = req.body;

    if (!firstName || !lastName || !email || !department || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      department,
      message
    });

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      contact
    });
  } catch (error) {
    console.error("Contact save error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
