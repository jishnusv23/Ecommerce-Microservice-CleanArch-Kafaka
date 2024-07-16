import { addProductController } from "./addProducts";
import { listProductController } from "./listProducts";
import { IDpendencies } from "../../application/interface/IDependencies";
export const controller = (dependencies: IDpendencies) => {
    return {
        addProduct:addProductController(dependencies),
        listProduct:listProductController(dependencies)
    }
};
//* direct export 