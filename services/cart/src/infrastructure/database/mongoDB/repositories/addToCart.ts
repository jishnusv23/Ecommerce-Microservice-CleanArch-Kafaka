import {
  AddToCartRequest,
  cartEntities,
} from "../../../../domain/entities/cartEntities";
import { CartModel, ICartDocument } from "../models/cartModel";

export const addToCart = async (
  data: AddToCartRequest
): Promise<cartEntities | null> => {
  try {
    let cart: ICartDocument | null = await CartModel.findOne({
      userId: data.userId,
    });
    if (!cart) {
      cart = await CartModel.create({ userId: data.userId, items: [] });
    }
    const existingItemIndex = cart.items.findIndex((item) =>
      item.productId.equals(data.productId)
    );
    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity += 1;
    } else {
      cart.items.push({ productId: data.productId, quantity: 1 });
    }

    const updateCart: cartEntities | null = await cart.save();
    return updateCart;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
