import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async () => {
  try {
    const mongooURI = process.env.MONGODB_URI;
    if (!mongooURI) {
      throw new Error("something wrong in mongouri in prouduct-service");
    }
    await mongoose.connect(mongooURI.trim());
    console.log("MongoDB connected successfully----->👽");
  } catch (error: any) {
    console.error("Database connection failed-------->👾");
    console.error(error?.message);
    process.exit(1);
  }
};
