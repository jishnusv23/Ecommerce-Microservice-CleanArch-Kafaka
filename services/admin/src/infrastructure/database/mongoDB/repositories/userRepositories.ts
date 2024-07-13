import { UserData, User } from "../../../../domain/entities";
import { Admin } from "../models/loginSchema";
import bcrypt from "bcrypt";

export const addUser = async (data: UserData): Promise<User | null> => {
  try {
    console.log("👽 ---------------->", data);
    if (!data.email || !data.password || !data.username) {
      throw new Error("User, Email and Password are required");
    }
    if (data.username.trim() === "") {
      throw new Error("User name cannot be empty");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error("Email is Invalid");
    }
    if (data.password.length < 6) {
      throw new Error("password must be 8 character");
    }
    const existingUsea: User | null = await Admin.findOne({
      email: data.email,
    });
    if (existingUsea) {
      throw new Error("Email alreday exists");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = new Admin({
      username: data.username,
      email: data.email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save() as User;
    return savedUser;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
