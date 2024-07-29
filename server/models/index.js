const mongoose = require('mongoose');

// Database connection URI
const dbURI = 'mongodb://localhost:27017/posh-collective';

// Connect to MongoDB
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Optionally set other options here
});

// Get the default connection
const db = mongoose.connection;

// Handle connection errors
db.on('error', console.error.bind(console, 'connection error:'));

// Once connected, log a success message
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import the User model
const User = require('./User');

// Import the Item model
const Item = require('./Item');

// Export the connection and the models
module.exports = {
  mongoose,
  db,
  User,
  Item,
};
