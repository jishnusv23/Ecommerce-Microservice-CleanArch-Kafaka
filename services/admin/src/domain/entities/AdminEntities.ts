import { ObjectId } from "mongoose";

enum Role {
  user = "user",
  admin = "admin",
}
//*adminentities
export interface AdminEntities {
  _id?: ObjectId | string;
  username: string;
  email: string;
  password: string;
  role: Role;
  isAdmin: boolean;
  isBlocked: boolean;
}
