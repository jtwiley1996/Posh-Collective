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

// Export the connection and any models you might add here
module.exports = {
  mongoose,
  db,
};
