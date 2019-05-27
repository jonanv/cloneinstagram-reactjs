const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schemas';
import resolvers from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);