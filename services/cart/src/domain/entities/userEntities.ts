import { Types } from "mongoose";

enum Role {
  user = "user",
  admin = "admin",
}

export interface IUserEntities {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  role: Role;
  isAdmin: boolean;
  isBlocked: boolean;
}

export interface IUserRequestEntities {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
}
