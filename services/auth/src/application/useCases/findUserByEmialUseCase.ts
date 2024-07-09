import { IDepedencies } from "../interfaces/IDependencies";
import { userEnitites } from "../../domain/entities";

export const findUserByEmialUseCase = (dependencies: IDepedencies) => {
  const { repositories } = dependencies;
  return {
    execute: async (email: string): Promise<userEnitites | null> => {
        return await repositories.findByEmail(email)
    },
  };
};
