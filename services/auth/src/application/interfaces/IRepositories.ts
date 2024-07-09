import { userEnitites, userLoginEntities } from "../../domain/entities";

export interface IRepositories {
  singup: (data: userEnitites) => Promise<userEnitites | null>;
  login: (data: userLoginEntities) => Promise<userEnitites | null>;
  findByEmail: (email: string) => Promise<userEnitites|null>;
}
