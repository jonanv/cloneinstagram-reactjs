// Provide resolver functions for your schema fields
export default {
    Query: {
        holaMundo: (parents, args, context, info) => 'Hello world!',
    },
    Mutation: {
        createUser: (parents, args, {models}) => models.User.create(args),
    }
};