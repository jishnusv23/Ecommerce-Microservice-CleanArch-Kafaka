import { Request, Response, NextFunction } from "express";
import { IDpendencies } from "../../application/interface/IDependencies";
import { Product } from "../../domain/entities";
import { validationProductRequest } from "../../util/productValidation";
import { productCreatedProducer } from "../../infrastructure/kafka/producers/productCreatedProducer";

export const addProductController = (dependencies: IDpendencies) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const {
      useCases: { AddProductUseCase },
    } = dependencies;
    try {
      const data = req.body;
      const validation = validationProductRequest(data);

      if (!validation.isValid) {
        res.status(400).json({ success: false, errors: validation.errors });
        return;
      }
      const product: Product | null = await AddProductUseCase(
        dependencies
      ).execute(data);
      if (product) {
        const addProduct = {
          _id: product._id,
          name: product.name,
          description: product.description,
          price: product.price,
          stock: product.stock,
        };
        productCreatedProducer(addProduct);
        res.status(201).json({ success: true, data: product });
      } else {
        res.status(400).json({success:false,message:'Product not found'})
      }
    } catch (error) {
      next(error);
    }
  };
};
