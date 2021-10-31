import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    image: {
        type: String,
    },
});

let User = mongoose.models.users || mongoose.model('users', userSchema);

export default User;
