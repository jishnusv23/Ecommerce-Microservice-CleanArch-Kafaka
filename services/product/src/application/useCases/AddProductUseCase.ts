import { IDpendencies } from "../interface/IDependencies";
import { ProductRequest } from "../../domain/entities";

export const AddProductUseCase = (dependencies: IDpendencies) => {
  const {
    repositories: { addProduct },
  } = dependencies;
  return {
    execute: async (data: ProductRequest) => {
      try {
        return await addProduct(data)
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
