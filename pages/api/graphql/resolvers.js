import User from './models/userModel';
import { getSession } from 'next-auth/client';

const resolvers = {
    Query: {
        getUsers: async (_, __, context) => {
            try {
                // console.log('session from getUsers', context.req);
                const users = await User.find();

                if (!users) throw new Error('Can not get any users');
                return users;
            } catch (error) {
                console.log('GET USERS ERROR: ', error);
            }
        },
    },
    Mutation: {
        addPost: async (_, { content }, { req, res }) => {
            try {
                const session = await getSession({ req });
                // const token = await getToken({ req });
                console.log('mutation session ', session, token);
                // console.log(context.req.headers.authorization.split(' ')[1]);
                // const token = jwt_decode(
                //     context.req.headers.authorization.split(' ')[1]
                // );
                // console.log(token);
                return {};
            } catch (error) {
                console.log('ADD POST ERROR: ', error);
            }
        },
    },
};

export default resolvers;
