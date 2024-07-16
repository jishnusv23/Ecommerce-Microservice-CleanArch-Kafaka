import mongoose, { Schema, Document } from "mongoose";
import { AddProduct } from "../../../../domain/entities/productEntities";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product=mongoose.model<AddProduct&Document>('product',productSchema)
