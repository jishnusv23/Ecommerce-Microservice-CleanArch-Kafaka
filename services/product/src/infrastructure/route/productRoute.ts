import { Router } from "express";
import { IDpendencies } from "../../application/interface/IDependencies";
import { controller } from "../../presentation/controller";

export const productRoute = (dependencies: IDpendencies) => {
  const { addProduct, listProduct } = controller(dependencies);
  const router = Router();

  router.route("/addproduct").post(addProduct);
  router.route("/listproduct").get(listProduct);
  return router;
};
