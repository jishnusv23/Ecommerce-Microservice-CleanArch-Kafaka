import { userEnitites } from "../../domain/entities";
import { IDepedencies } from "../interfaces/IDependencies";

export const singupUserUseCase = (dependencies: IDepedencies) => {
  const {
    repositories: { singup },
  } = dependencies;
  return {
    execute: async (data: userEnitites) => {
      try {
        return await singup(data);
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
