// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: (parents, args, context, info) => 'Hello world!',
    },
};