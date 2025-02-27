const express = require("express");
const router = express.Router();
const Bus = require("../../Module/Buses");

// Add a new bus
router.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const newBus = new Bus(req.body);
    await newBus.save();
    res.status(201).json({ message: "Bus added successfully!", bus: newBus });
  } catch (error) {
    res.status(500).json({ message: "Error adding bus", error: error.message });
  }
});

// Get all buses
router.get("/", async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching buses", error: error.message });
  }
});

module.exports = router;
