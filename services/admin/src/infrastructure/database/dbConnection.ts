import mongoose from "mongoose";
import dotenv from "dotenv";

export default async () => {
  try {
    dotenv.config()
    const mongodbURI = process.env.MONGODB_URI;
    if (!mongodbURI) {
      throw new Error("🤖 Database path has not working in admin-service");
    }
    await mongoose.connect(mongodbURI.trim());
    console.log("👽 ------>Database connceted successfuly");
  } catch (error: any) {
    console.error("🤖 Databse connection fail in admin-service", error);
    throw new Error(error?.message);
    process.exit(1);
  }
};
