import { Document, Types, model, Model, Schema } from "mongoose";

interface ICartItem {
  productId: Types.ObjectId;
  quantity: number;
}

interface ICartDocument extends Document {
  userId: Types.ObjectId;
  items: ICartItem[];
}

const cartSchema = new Schema(
  {
    userId: { type: Types.ObjectId, required: true },
    items: [
      {
        productId: { type: Types.ObjectId, required: true },
        quantity: { type: Number, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const CartModel: Model<ICartDocument> = model<ICartDocument>(
  "cart",
  cartSchema
);

export { ICartDocument, CartModel };
