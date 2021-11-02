import { gql } from 'graphql-request';

// GRAPHQL SERVER ENDPOINT
export const endpoint = 'http://localhost:3000/api/graphql';

// USER
export const QUERY_GET_USERS = gql`
    query GetUsers {
        getUsers {
            _id
            name
            email
            image
        }
    }
`;

// POST
export const MUTATION_ADD_POST = gql`
    mutation AddPost($content: String!) {
        addPost(content: $content) {
            _id
            content
            user {
                _id
                name
            }
        }
    }
`;
