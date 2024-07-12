import { AddProduct } from "../../../../domain/entities/productEntities";
import { Product } from "../models/productModel";

export const insertProduct = async (data: AddProduct) => {
  try {
    const createNewProduct = new Product({
      _id: data._id,
      name: data.name,
      description: data.description,
      price: data.price,
      stock: data.stock,
    });
    await createNewProduct.save();
  } catch (error: any) {
    throw new Error(error?.message)
  }
};
