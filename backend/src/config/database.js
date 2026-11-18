import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is missing. Add it to your .env file.");
        }

        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.DB_NAME || DB_NAME,
        });
        console.log(`MongoDB connection successful! Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }
};

export default connectDB;