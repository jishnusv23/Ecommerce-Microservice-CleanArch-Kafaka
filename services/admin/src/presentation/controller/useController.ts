import { Request, Response, NextFunction } from "express";
import { IDepnedencies } from "../../application/interface/IDependencies";
import { User } from "../../domain/entities";

export const addUserController = (dependencies: IDepnedencies) => {
  const {
    useCase: { AddUsercase },
  } = dependencies;
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body;

      const addUser: User | null = await AddUsercase(dependencies).execute(
        userData
      );
      console.log(
        "👽 ~ file: useController.ts:12 ~ returnasync ~ addUser:",
        addUser
      );

      res.status(200).json(addUser);
    } catch (error:any) {
      next(error);
    }
  };
};
