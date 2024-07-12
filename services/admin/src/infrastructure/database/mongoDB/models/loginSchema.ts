import mongoose, { Schema } from "mongoose";
import { AdminEntities } from "../../../../domain/entities/AdminEntities";

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
  isBlocked:{
    type:Boolean,
    default:false
  }
},{timestamps:true});

export const Admin=mongoose.model<AdminEntities>('Admin',adminSchema)