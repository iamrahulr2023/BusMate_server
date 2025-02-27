// const mongoose = require("mongoose");

// const ConductorSchema = new mongoose.Schema({
//   fullName: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   phoneNumber: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//   },
//   dob: {
//     type: String, // Storing as string (YYYY-MM-DD format)
//     required: false,
//   },
//   age: {
//     type: Number,
//     required: false,
//   },
//   gender: {
//     type: String,
//     enum: ["Male", "Female", "Other"],
//     required: false,
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 6, // Minimum password length
//   },
// }, { timestamps: true });

// module.exports = mongoose.model("Conductorss", ConductorSchema);

const mongoose = require("mongoose");

const ConductorSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  dob: { type: Date },
  age: { type: Number },
  gender: { type: String, enum: ["Male", "Female", "Other"] },
  password: { type: String, required: true },
});

const Conductor = mongoose.model("Conductor", ConductorSchema);
module.exports = Conductor;  // <-- Ensure this is exporting the model
