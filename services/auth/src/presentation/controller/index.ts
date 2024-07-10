import { IDepedencies } from "../../application/interfaces/IDependencies";
import { singupController } from "./singup";
import { loginController } from "./login";

export const controller = (dependencies: IDepedencies) => {
    return {
        singup:singupController(dependencies),
        login:loginController(dependencies)
        
    }
};
