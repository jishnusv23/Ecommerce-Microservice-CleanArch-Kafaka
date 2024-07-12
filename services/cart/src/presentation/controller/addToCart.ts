import {NextFunction,Request,Response} from 'express'
import { IDependencies } from '../../application/interface/IDependencies'
import { cartEntities } from '../../domain/entities/cartEntities'


export const addToCatController = (dependencies: IDependencies) => {
  const {
    useCases: { addToCartUseCase },
  } = dependencies;

  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data = req.body;
      console.log("🚀 ~ file: addToCart.ts:12 ~ returnasync ~ data:", data);
    } catch (error) {
      next(error);
    }
  };
};