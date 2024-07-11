import { NextFunction, Request, Response } from "express";
import { IDpendencies } from "../../application/interface/IDependencies";
import { Product } from "../../domain/entities";

export const listProductController = (dependencies: IDpendencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {
      useCases: { listProductUseCase },
    } = dependencies;
    try {
      const token: string | any = req.cookies.user_jwt;
      if (!token) {
        throw new Error("Authentication failed due to token undefined ");
      }
      const proudct: Product[] | null = await listProductUseCase(
        dependencies
      ).execute(token);
      console.log("proudct: ", proudct);
      
      if (!proudct) {
        throw new Error("product not found");
      }
      res.json({ success: true, data: proudct });
    } catch (error) {
      next(error);
    }
  };
};
