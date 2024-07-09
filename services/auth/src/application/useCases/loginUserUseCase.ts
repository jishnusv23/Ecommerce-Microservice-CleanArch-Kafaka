import { userLoginEntities } from "../../domain/entities";
import { IDepedencies } from "../interfaces/IDependencies";

export const loginUserCase = (dependencies: IDepedencies) => {
  const {
    repositories: { login },
  } = dependencies;
  return {
    execute: async (data: userLoginEntities) => {
      try {
        return await login(data);
      } catch (error:any) {
        throw new Error(error?.message)
      }
    },
  };
};
