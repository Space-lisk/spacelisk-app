import mongoose from 'mongoose';

const MONGO_URI = process.env.NEXT_PUBLIC_DATABASE_URL;

export default async function connectDB() {
    if (!MONGO_URI) {
        throw new Error('Please define the DB_URL environment variable');
    }

    return await mongoose.connect(MONGO_URI)
        .then(() => console.log('Connected!'))
        .catch((e) => console.log('Unable to connect'));
}