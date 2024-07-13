import { Router } from "express";
import { controller } from "../../presentation/controller/indext";
import { IDepnedencies } from "../../application/interface/IDependencies";


export const adminRouter = (dependencies: IDepnedencies) => {
  const { login, addUser } = controller(dependencies);
  const router = Router();

  router.route("/admin-login").post(login);
  router.route("/add-user").post(addUser);

  return router
};
