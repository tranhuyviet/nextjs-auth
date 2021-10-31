import { gql } from 'apollo-server-micro';

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String
        image: String
    }

    type Query {
        getUsers: [User!]
    }
`;

export default typeDefs;
