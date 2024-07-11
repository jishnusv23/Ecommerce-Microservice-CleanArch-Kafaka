import mongoose, { Schema,Document } from "mongoose";
import {Product } from "../../../../domain/entities";

const produtSchema: Schema = new Schema(
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

export const Products= mongoose.model<Product|Document>('product',produtSchema)
