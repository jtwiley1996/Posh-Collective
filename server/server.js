const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const typeDefs = require('./schemas/typeDefs'); // Adjust path as needed
const resolvers = require('./schemas/resolvers'); // Adjust path as needed
const connectDB = require('./config/connection'); // Adjust path as needed

const PORT = process.env.PORT || 3001;
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// JWT Secret (You should use a secure method to generate and store this)
const JWT_SECRET = 'your_jwt_secret';

// Example route for generating JWT (optional)
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
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      // Get the user token from the headers
      const token = req.headers.authorization || '';

      // Verify and decode the token
      try {
        const user = jwt.verify(token, JWT_SECRET);
        // Optionally, you might fetch user data from your database here

        return { user };
      } catch (error) {
        return { user: null };
      }
    },
  });

  await server.start(); // Await server start before applying middleware
  server.applyMiddleware({
    app,
    path: '/graphql',
  });

  // Add a catch-all route handler for any route that's not defined
  app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not Found' });
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`GraphQL server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();
