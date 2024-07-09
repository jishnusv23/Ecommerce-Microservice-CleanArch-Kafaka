import { userEnitites } from "../../../../domain/entities";
import { User } from "../models/loginCredentials";

export const singup = async (
  data: userEnitites
): Promise<userEnitites | null> => {
  try {
    const newUser = await User.create(data);
    console.log("🚀 ~ file: singup.ts:9 ~ newUser:", newUser);
    if (!newUser) {
      throw new Error("User creation failed!");
    }
    return newUser as userEnitites
  } catch (error:any) {
    throw new Error(error?.message)
  }
};
