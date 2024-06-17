// server.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas/typeDefs'); // Update path to typeDefs
const resolvers = require('./schemas/resolvers'); // Update path to resolvers
const connectDB = require('./config/connection'); // Import MongoDB connection

const PORT = process.env.PORT || 3001;
const app = express();

// Connect to MongoDB
connectDB();

// Set up Apollo Server for GraphQL
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

// Define routes and middleware as needed

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
