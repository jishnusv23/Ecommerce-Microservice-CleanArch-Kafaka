import { AdminEntities, AdminLoginRequest } from "../../../../domain/entities";
import { Admin } from "../models/loginSchema";
import bcrypt from "bcrypt";

export const login = async (
  data: AdminLoginRequest
): Promise<AdminEntities | null> => {
  try {
    console.log("🤺Data-------->", data);
    if (!data.email || data.password) {
      throw new Error("Email and password are required");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error("Invalid Email format");
    }
    if (data.password.length < 6) {
      throw new Error("Password must be at least 8 characters");
    }

    const admin: AdminEntities | null = await Admin.findOne({
      email: data.email,
    });
    console.log("🚀 ~ file: adminLogin.ts:24 ~ admin:", admin);
    if (admin) {
      const passworMatch: boolean = await bcrypt.compare(
        data.password,
        admin.password
      );
      if (!passworMatch) {
        throw new Error("Invalid password ");
      } else {
        return admin as AdminEntities;
      }
    } else {
      throw new Error("Admin not found");
    }
  } catch (error: any) {
    console.log("🤖admin-repositories--->",error)
    throw new Error(error?.message);
  }
};
