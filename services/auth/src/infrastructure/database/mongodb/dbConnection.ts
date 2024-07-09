import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error(
        "MongoDB connection string  not provided in env  in auth-services"
      );
    }
    await mongoose.connect(mongoUri.trim());

    console.log("🚀 ~ MongoDb connected successfully ---> in auth-service");
  } catch (err: any) {
    console.error("Database connection faild--> in auth-service");
    console.error(err.message);
    process.exit(1);
  }
};
