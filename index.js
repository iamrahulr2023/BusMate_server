const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const dotenv = require('dotenv');

// Load environment variables
//dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON requests
app.use(bodyParser.urlencoded({ extended: true }));

// Default Route
// app.get('/', (req, res) => {
//   res.send('BusMate Backend is Running!');
// });

// // Sample Route (For testing API)
// app.get('/api/test', (req, res) => {
//   res.json({ message: 'API is working!' });
// });


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
