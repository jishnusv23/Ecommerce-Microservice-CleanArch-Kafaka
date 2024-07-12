import { Router } from "express";
import { IDependencies } from "../../application/interface/IDependencies";
import { controller } from "../../presentation/controller";

export const cartRouter = (dependencies: IDependencies) => {
  const { getCart, users } = controller(dependencies);
  const router = Router();
  router.route("/addTocart").post(users);
  router.route("/getcart/:id").get(getCart);
  return router
};
