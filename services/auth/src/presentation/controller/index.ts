import { IDepedencies } from "../../application/interfaces/IDependencies";
import { singupController } from "./singup";

export const controller = (dependencies: IDepedencies) => {
    return {
        singup:singupController(dependencies)
        
    }
};
