import { userEnitites } from "../entities";

export interface ISingupUserUseCase{
    execute(data:userEnitites):Promise<userEnitites|null>
}