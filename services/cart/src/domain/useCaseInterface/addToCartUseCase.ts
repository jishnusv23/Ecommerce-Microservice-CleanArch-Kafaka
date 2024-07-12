import { cartEntities, AddToCartRequest } from "../entities/cartEntities";

export interface IaddToCartUseCase{
    execute(data:AddToCartRequest):Promise<cartEntities|null>
}