import { Product, ProductRequest } from "../../../../domain/entities";
import { Products } from "../models/productSchema";

export const addProduct = async (
  data: ProductRequest
): Promise<Product | null> => {
  try {
    const newProduct = new Products(data);
    const saveProduct = await newProduct.save();
    return saveProduct as Product;
  } catch (error) {
    console.error("Error adding product:", error);
    throw new Error("failed to add product");
  }
};
