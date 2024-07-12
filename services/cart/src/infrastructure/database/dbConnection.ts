import mongoose, { Schema } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async () => {
  try {
    const mongodbURI = process.env.MONOGDB_URI;
    if (!mongodbURI) {
      throw new Error("🤖databse path is mistake in cart-service");
    }
    await mongoose.connect(mongodbURI.trim());
    console.log("👽 MongoDb connected sucessfuly---------------->")
  } catch (error: any) {
    console.error("🤖Database connection eroor in cart-service");
    throw new Error(error?.message);
    process.exit(1);
  }
};
