import { gql } from 'apollo-server-micro';

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String
        image: String
    }

    type Post {
        _id: ID!
        content: String!
        user: User!
        createdAt: String!
        updatedAt: String!
    }

    type ReturnPosts {
        total: Int!
        hasMore: Boolean!
        posts: [Post!]
    }

    type Query {
        getUsers: [User!]
        getPostsByUserId(userId: ID!): ReturnPosts
    }

    type Mutation {
        addPost(content: String!): Post!
    }
`;

export default typeDefs;
