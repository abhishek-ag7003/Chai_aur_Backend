import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    //    const connectionInstance =  await mongoose.connect("mongodb+srv://abhishek_db:Abhishek%409346@cluster0.nuskxrv.mongodb.net");
       console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('MONGODB Connection Failed:', error);
        process.exit(1);
    }
}

export default connectDB;