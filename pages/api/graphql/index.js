import { ApolloServer } from 'apollo-server-micro';
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    // ApolloServerPluginInlineTrace,
} from 'apollo-server-core';
import Cors from 'micro-cors';

import connectDatabase from '../../../mongodb/connectDatabase';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

import jwt from 'next-auth/jwt';

connectDatabase();

const cors = Cors({
    allowMethods: ['GET', 'POST', 'OPTIONS'],
});

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],

    context: async ({ req, res }) => {
        const secret = process.env.JWT_SECRET;
        const token = await jwt.getToken({ req, secret });
        let userId = null;
        if (token) {
            userId = token.sub;
        }
        return { req, res, userId };
    },

    // context: async ({ req, res }) => {
    //     const session = await getSession({ req });
    //     console.log('SESSION, ', session);
    // },
});

const startServer = apolloServer.start();

async function handler(req, res) {
    // start apollo server
    await startServer;
    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res);
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default cors(handler);
