import { User } from "../models/loginCredentials";
import { userEnitites } from "../../../../domain/entities";
import { userLoginEntities } from "../../../../domain/entities";
import bcrypt from "bcrypt";

export const login = async (
  data: userLoginEntities
): Promise<userEnitites | null> => {
  try {
    console.log(data);
    const user: userEnitites | null = await User.findOne({ email: data.email });
    console.log("new user login", user);
    if (user) {
      const isMatch: boolean = await bcrypt.compare(
        data.password,
        user.password
      );
      if (!isMatch) {
        throw new Error("Username or Passwrod incorrect");
      } else {
        return user as userEnitites
      }
    } else {
      throw new Error("user not found");
    }
  } catch (error: any) {
    console.error(error.message);
    return null;
  }
};
