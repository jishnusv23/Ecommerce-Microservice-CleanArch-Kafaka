import { User, UserData } from "../entities";

export interface AddUserCase {
  execute(userData: UserData):Promise<User|null>
}
