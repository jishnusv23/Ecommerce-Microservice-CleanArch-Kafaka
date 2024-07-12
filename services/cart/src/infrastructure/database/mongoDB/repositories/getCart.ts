import { cartEntities } from "../../../../domain/entities/cartEntities";
import { CartModel } from "../models/cartModel";

export const getCart = async (userId: string): Promise<cartEntities | null> => {
  try {
    const usersId = userId;
    const cartDocument: cartEntities | null = await CartModel.findOne({
      userId,
    });
    //*checking is empty
    if (!cartDocument) {
      throw new Error("cart not found");
    }
    const cart: cartEntities = {
      userId: cartDocument.userId,
      items: cartDocument.items.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
    };
    return cart;
  } catch (error: any) {
    console.error("error resiving in user cart",error);

    throw new Error(error?.message);
  }
};
