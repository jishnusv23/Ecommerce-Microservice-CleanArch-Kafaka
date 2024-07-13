import { AdminLoginRequest,AdminEntities } from "../entities";


export interface loginAdminUseCases{
    execute(credentials:AdminLoginRequest):Promise<AdminEntities|null>
}