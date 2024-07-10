import { Router } from "express";
import { IDepedencies } from "../../application/interfaces/IDependencies";
import { controller } from "../../presentation/controller";

export const authRoutes = (dependencies: IDepedencies) => {
  const {singup,login } = controller(dependencies);
  const router = Router();

  router.route("/signup").post(singup);
  router.route('/login').post(login)

  return router
};
