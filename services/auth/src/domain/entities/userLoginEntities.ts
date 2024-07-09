import {ObjectId} from 'mongoose'


export  interface userLoginEntities{
    _id?:ObjectId,
    email:string,
    password:string
}