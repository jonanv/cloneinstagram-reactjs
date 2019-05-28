// Provide resolver functions for your schema fields
export default  {
    Query: {
        holaMundo: (parents, args, context, info) => 'Hello world!',
    },
};