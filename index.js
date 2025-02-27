// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const Conductor = require("./Module/Conductor_sc"); // Ensure this is correct

// const mongoose = require("mongoose");  // Add this line


// //const dotenv = require('dotenv');

// // Load environment variables
// //dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors()); // Enable Cross-Origin Resource Sharing
// app.use(bodyParser.json()); // Parse JSON requests
// app.use(bodyParser.urlencoded({ extended: true }));

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb+srv://thamilprakasam2005:appichithamil@cluster0.qqwny.mongodb.net/Bus_Mate", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("MongoDB Connected Successfully");
//   } catch (error) {
//     console.error("MongoDB Connection Failed:", error);
//     process.exit(1); // Exit process with failure
//   }
// };

// connectDB();


// // app.post("/api/conductors", (req, res) => {
// //   console.log("Received data:", req.body);
// //   res.status(201).json({ message: "Conductor added successfully!" });
// // });


// app.post("/api/conductors", async (req, res) => {
//   try {
//     const { fullName, phoneNumber, dob, age, gender, password } = req.body;

//     // Check required fields
//     if (!fullName || !phoneNumber || !password) {
//       return res.status(400).json({ error: "Full Name, Phone Number, and Password are required!" });
//     }

//     // Ensure password meets length requirement
//     if (password.length < 6) {
//       return res.status(400).json({ error: "Password must be at least 6 characters long." });
//     }

//     // Ensure gender is valid
//     const validGenders = ["Male", "Female", "Other"];
//     if (gender && !validGenders.includes(gender)) {
//       return res.status(400).json({ error: "Invalid gender value." });
//     }

//     const newConductor = new Conductor({ fullName, phoneNumber, dob, age, gender, password });
//     await newConductor.save();

//     res.status(201).json({ message: "Conductor added successfully!", conductor: newConductor });
//   } catch (error) {
//     console.error("Error saving conductor:", error);
//     if (error.name === "ValidationError") {
//       return res.status(400).json({ error: error.message });
//     }
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });



// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Conductor = require("./Module/Conductor_sc");  // Ensure this is correct

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

// // ✅ POST request to save Conductor data
// app.post("/api/conductors", async (req, res) => {
//   try {
//     const { fullName, phoneNumber, dob, age, gender, password } = req.body;

//     if (!fullName || !phoneNumber || !password) {
//       return res.status(400).json({ error: "Full Name, Phone Number, and Password are required!" });
//     }

//     const newConductor = new Conductor({ fullName, phoneNumber, dob, age, gender, password });
//     await newConductor.save();

//     res.status(201).json({ message: "Conductor added successfully!", conductor: newConductor });
//   } catch (error) {
//     console.error("Error saving conductor:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
