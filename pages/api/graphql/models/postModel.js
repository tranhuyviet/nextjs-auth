import mongoose from 'mongoose';

const { Schema, model, Types } = mongoose;

const postSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        user: {
            type: Types.ObjectId,
            ref: 'users',
        },
    },
    {
        timestamps: true,
    }
);

let Post = mongoose.models.posts || mongoose.model('posts', postSchema);

export default Post;
