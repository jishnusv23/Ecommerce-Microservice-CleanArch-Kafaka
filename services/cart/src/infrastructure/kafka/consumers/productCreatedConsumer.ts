import { insertProduct } from "../../database/mongoDB/repositories";
import { AddProduct } from "../../../domain/entities/productEntities";

export default async (data:AddProduct)=>{
    try{
        console.log("🤺-------------------->",data)
        await insertProduct(data)

    }catch(eror:any){
        throw new Error(eror?.message)
    }
}