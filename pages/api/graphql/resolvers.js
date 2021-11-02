import User from './models/userModel';
import Post from './models/postModel';

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
        addPost: async (_, { content }, { userId }) => {
            try {
                const newPost = new Post({
                    content,
                    user: userId,
                });

                await newPost.save();
                await newPost.populate({
                    path: 'user',
                    select: 'name image email',
                });

                console.log(newPost);
                return newPost;
            } catch (error) {
                console.log('ADD POST ERROR: ', error);
            }
        },
    },
};

export default resolvers;
