import { userEnitites } from "../entities";

export interface IFindUserEmailUseCase {
  execute(email:string):Promise<userEnitites|null>
}
