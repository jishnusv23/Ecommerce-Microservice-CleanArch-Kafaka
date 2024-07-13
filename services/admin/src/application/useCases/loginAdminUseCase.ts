import { AdminLoginRequest } from "../../domain/entities";
import { IDepnedencies } from "../interface/IDependencies";

export const loginAdminUseCase = (dependencies: IDepnedencies) => {
  const {
    repositories: { login },
  } = dependencies;
  return {
    execute: async (data: AdminLoginRequest) => {
      try {
        return await login(data);
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
