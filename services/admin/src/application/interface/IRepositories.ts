import {
  AdminLoginRequest,
  AdminEntities,
  User,
  UserData,
} from "../../domain/entities";

export interface IRepositories {
    login:(data:AdminLoginRequest)=>Promise<AdminEntities|null>,
    addUser:(data:UserData)=>Promise<User|null>
}

