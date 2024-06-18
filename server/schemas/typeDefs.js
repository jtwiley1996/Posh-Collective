// server/schemas/typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]
    profile(profileId: ID!): Profile
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

