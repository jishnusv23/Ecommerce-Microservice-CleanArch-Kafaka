import { IDependencies } from "../interface/IDependencies";

export const getCart = (dependencies: IDependencies) => {
  const {
    repositories: { getCart },
  } = dependencies;

  return {
    execute: async (userId: string) => {
      try {
        return await getCart(userId);
      } catch (error: any) {
        throw new Error(error?.message)
    
      }
    },
  };
};
