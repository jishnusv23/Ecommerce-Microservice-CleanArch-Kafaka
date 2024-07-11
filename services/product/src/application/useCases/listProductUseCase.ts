// import { IDpendencies } from "../interface/IDependencies";

// export const listProductUseCase = (dependencies: IDpendencies) => {
//   const {
//     repositories: { listProduct },
//   } = dependencies;
//   return {
//     execute: async (token: string) => {
//       try {
//         const products = await listProduct(token);
//         if (!products) {
//           return null;
//         }

//         return products;
//       } catch (error: any) {
//         console.error(error?.message);
//       }
//     },
//   };
// };


import { Product } from "../../domain/entities";
import { IDpendencies } from "../interface/IDependencies";

export const listProductUseCase = (dependencies: IDpendencies) => {
  const {
    repositories: { listProduct },
  } = dependencies;
  return {
    execute: async (token: string): Promise<Product[] | null> => {
      try {
        const products = await listProduct(token);
        if (!products) {
          return null;
        }
        return products;
      } catch (error: any) {
        console.error(error?.message);
        return null;
      }
    },
  };
};
