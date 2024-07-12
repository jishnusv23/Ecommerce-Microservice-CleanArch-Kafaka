import { NextFunction, Response, Request } from "express";
import { IDependencies } from "../../application/interface/IDependencies";
import { cartEntities } from "../../domain/entities/cartEntities";

export const getCartController = (dependencies: IDependencies) => {
  const {
    useCases: { getCart },
  } = dependencies;
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = req.params.id;
      console.log("🤺 ~ file: getCart.ts:16 ~ getCart ~ userId:", userId);
      const cart: cartEntities | null = await getCart(dependencies).execute(
        userId
      );
      res.status(201).json({ success: true, data: cart });
    } catch (error) {
      next(error);
    }
  };
};
