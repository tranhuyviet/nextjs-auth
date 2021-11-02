import { gql } from 'graphql-request';

// GRAPHQL SERVER ENDPOINT
// export const endpoint = 'http://localhost:3000/api/graphql';
export const endpoint = 'https://next-auth-viet.vercel.app/api/graphql';

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
export const QUERY_GET_POSTS_BY_USERID = gql`
    query GetPostsByUserId($userId: ID!) {
        getPostsByUserId(userId: $userId) {
            total
            hasMore
            posts {
                _id
                content
                createdAt
                updatedAt
            }
        }
    }
`;

export const MUTATION_ADD_POST = gql`
    mutation AddPost($content: String!) {
        addPost(content: $content) {
            _id
            content
            createdAt
            updatedAt
            user {
                _id
                name
                image
            }
        }
    }
`;
