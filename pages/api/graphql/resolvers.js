import User from './models/userModel';
import { getSession } from 'next-auth/client';
const resolvers = {
    Query: {
        getUsers: async (_, __, { req, res }) => {
            try {
                const session = await getSession({ req });
                console.log('session from getUsers', session);
                const users = await User.find();

                if (!users) throw new Error('Can not get any users');
                return users;
            } catch (error) {
                console.log('GET USERS ERROR: ', error);
            }
        },
    },
};

export default resolvers;
