// Construct a schema, using GraphQL schema language
// ! Significa que no puede ir null
export default `
    type User {
        _id: ID!
        username: String!
        password: String!
    }

    type Query {
        holaMundo: String
    }

    type Mutation {
        createUser(username: String!, password: String!): User!
    }
`;