import {
  cartEntities,
  AddToCartRequest,
} from "../../domain/entities/cartEntities";

export interface IRepositories {
  addToCart: (data: AddToCartRequest) => Promise<cartEntities | null>;
  getCart:(userId:string)=>Promise<cartEntities|null>
}
