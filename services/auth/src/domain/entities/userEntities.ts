
import { Document,Types } from "mongoose";
enum Role {
  user = "user",
  admin = "admin",
}

export interface userEnitites {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  role: Role; 
  isAdmin:boolean,
  isBlocked:boolean
}
