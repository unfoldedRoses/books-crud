
const mongoose = require('mongoose');

require('dotenv').config(); // Load environment variables from .env file

// Use the MONGODB_URI environment variable
const mongoURI = process.env.MONGODB_URI;

// Connect to the MongoDB database
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB: ' + err);
  });

module.exports = mongoose.connection;
