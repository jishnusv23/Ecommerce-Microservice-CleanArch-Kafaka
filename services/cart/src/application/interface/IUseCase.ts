import {
  IaddToCartUseCase,
  IGetCartUseCase,
} from "../../domain/useCaseInterface";
import { IDependencies } from "./IDependencies";

export interface IUseCase {
  addToCartUseCase: (dependencies: IDependencies) => IaddToCartUseCase;
  getCart: (dependencies: IDependencies) => IGetCartUseCase;
}
