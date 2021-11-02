import mongoose from 'mongoose';

const connectDatabase = () => {
    try {
        if (mongoose.connections[0].readyState) {
            console.log('Already connected to database');
            return;
        }

        mongoose.connect(process.env.MONGODB_URL, {}, (err) => {
            if (err) throw err;
        });

        console.log('Connected to database');
    } catch (error) {
        console.log('CONNECT DATABASE ERROR: ', error);
    }
};

export default connectDatabase;
