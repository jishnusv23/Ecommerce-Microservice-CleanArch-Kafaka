import { cartEntities } from "../entities/cartEntities";

export interface IGetCartUseCase {
  execute(userId: string): Promise<cartEntities | null>;
}
