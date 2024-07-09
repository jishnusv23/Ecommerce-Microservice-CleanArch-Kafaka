import { userEnitites } from "../entities";
import { userLoginEntities } from "../entities/userLoginEntities";

export interface ILoginUserUseCase {
  execute(data: userLoginEntities):Promise<userEnitites|null>
}
