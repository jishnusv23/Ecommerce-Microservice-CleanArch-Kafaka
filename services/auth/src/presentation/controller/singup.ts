import { NextFunction, Request, Response } from "express";
import { IDepedencies } from "../../application/interfaces/IDependencies";

export const singupController = (dependencies: IDepedencies) => {
  const {
    useCases: { singupUserUseCase, findUserByEmialUseCase },
  } = dependencies;

  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      console.log(req.body)
    } catch (error) {
      next(error)
    }
  };
};
