import { addToCatController } from "./addToCart";
import { getCartController } from "./getCart";
import { IDependencies } from "../../application/interface/IDependencies";

export const controller = (dependencies: IDependencies) => {
  return {
    users: addToCatController(dependencies),
    getCart:getCartController(dependencies)
  }
};
