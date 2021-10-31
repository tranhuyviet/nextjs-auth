import { ApolloServer } from 'apollo-server-micro';
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    // ApolloServerPluginInlineTrace,
} from 'apollo-server-core';
import Cors from 'micro-cors';

import connectDatabase from '../../../mongodb/connectDatabase';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

import { getSession } from 'next-auth/client';

connectDatabase();

const cors = Cors({
    allowMethods: ['GET', 'POST', 'OPTIONS'],
});

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],

    context: ({ req, res }) => {
        return { req, res };
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
