const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const expressJwt = require('express-jwt');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');
const connectDB = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// JWT Secret (You should use a secure method to generate and store this)
const JWT_SECRET = 'your_jwt_secret';

// Example route for generating JWT
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Example: Authenticate user (replace with your actual authentication logic)
  if (username === 'example' && password === 'password') {
    // Generate JWT
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });

    // Return JWT to client
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Set up Apollo Server for GraphQL
async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start(); // Await server start before applying middleware
  server.applyMiddleware({
    app,
    // Optionally, add context to Apollo Server to pass decoded JWT payload to resolvers
    context: ({ req }) => {
      const user = req.user || null; // req.user will be set by expressJwt if token is valid
      return { user };
    },
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
