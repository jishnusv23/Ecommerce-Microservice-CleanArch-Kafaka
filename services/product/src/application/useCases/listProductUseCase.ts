import { IDpendencies } from "../interface/IDependencies";

export const listProductUseCase = (dependencies: IDpendencies) => {
  const {
    repositories: { listProduct },
  } = dependencies;
  return {
    execute: async (token: string) => {
      try {
       return  await listProduct(token);
      } catch (error: any) {
        console.error(error?.message);
      }
    },
  };
};
