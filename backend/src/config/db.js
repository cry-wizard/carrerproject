import mongoose from 'mongoose';
import "dotenv/config"

const MONGO_URI = process.env.MONGO_URI;
const connectDB = async ()=>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log('Error:',error);
        process.exit(1);
    }
}
export default connectDB;