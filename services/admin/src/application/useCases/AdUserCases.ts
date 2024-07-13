import { User } from "../../domain/entities";
import { IDepnedencies } from "../interface/IDependencies";

export const AddUsercase = (dependencies: IDepnedencies) => {
  const {
    repositories: { addUser },
  } = dependencies;
  return {
    execute: async (data: User) => {
      try {
        return await addUser(data);
      } catch (error: any) {
        throw new Error(error?.message);
      }
    },
  };
};
