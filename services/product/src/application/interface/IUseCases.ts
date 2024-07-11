import {
  IAddProductUseCase,
  IListProductUseCase,
} from "../../domain/useCaseInterface";

import { IDpendencies } from "./IDependencies";

export interface IUseCases {
  AddProductUseCase: (dependencies: IDpendencies) => IAddProductUseCase;
  listProductUseCase:(dependencies:IDpendencies)=>IListProductUseCase;
}
