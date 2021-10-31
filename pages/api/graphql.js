import { ApolloServer } from 'apollo-server-micro';
import {
    ApolloServerPluginLandingPageGraphQLPlayground,
    // ApolloServerPluginInlineTrace,
} from 'apollo-server-core';

import connectDatabase from '../../mongodb/connectDatabase';

import typeDefs from '../../graphql/typeDefs';
import resolvers from '../../graphql/resolvers';

connectDatabase();

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
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
