/*import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schemas';
import resolvers from './resolvers';

const schema = makeExecutableSchema({ typeDefs, resolvers });

const PORT = 3000;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}`)
);*/

//---------------------------------------------------------------------

import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

import typeDefs from './schemas';
import resolvers from './resolvers';
import models from "./models";

const schema = new ApolloServer({ typeDefs, resolvers, models });

const PORT = 3000;
const app = express();
schema.applyMiddleware({ app });

mongoose.connect('mongodb://localhost:27017/cloneinstagram-reactjs', {useNewUrlParser: true}).then(
    () => {
        console.log('Conectado a MongoDB.');
        app.listen(PORT, () =>
            console.log(`🚀 Server ready at http://localhost:${PORT}${schema.graphqlPath}`)
        );
    }
)