import { Product } from "../../../../domain/entities";
import { Products } from "../models/productSchema";
import { verifyToken } from "../../../../util/verifyToken";

export const listProduct = async (token: string): Promise<Product [] | null> => {
  try {
    const decodeToken = await verifyToken(token);

    const Role: string | undefined = decodeToken?.role;
    if (!Role) {
      throw new Error("Role not found in token payload");
    }
    if (Role == "user") {
      throw new Error("Unotharized role not access the pages");
    }
    const products:Product []=await Products.find()
    return products
  } catch (error) {
    console.error('list product is not valid',error);
    throw new Error('Invalid list products')
    
  }
};
