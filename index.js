const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const busRoutes = require("./Admin/BusRoutes/Adbuses"); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/Admin/buses", busRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://thamilprakasam2005:appichithamil@cluster0.qqwny.mongodb.net/Bus_Mate");
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
