import { loginController } from "./login";
import { addUserController } from "./useController";
import { IDepnedencies } from "../../application/interface/IDependencies";

export const controller = (dependencies: IDepnedencies) => {
  return {
    login: loginController(dependencies),
    addUser:addUserController(dependencies)
  };
};
