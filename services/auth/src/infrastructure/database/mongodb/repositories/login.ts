import { User } from "../models/loginCredentials";
import { userEnitites } from "../../../../domain/entities";
import { userLoginEntities } from "../../../../domain/entities";
import bcrypt from "bcrypt";
import { log } from "console";


export const login=async(data:userLoginEntities):Promise<userEnitites|null>=>{
try{
        console.log(data)
        const user=await User.findOne({email:data.email})
        return user as userEnitites
}catch(error:any){

    console.error(error.message);
    return null
}
}