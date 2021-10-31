import User from './models/userModel';

const resolvers = {
    Query: {
        getUsers: async () => {
            try {
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
