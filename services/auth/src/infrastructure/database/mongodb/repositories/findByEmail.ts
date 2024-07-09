import { userEnitites } from "../../../../domain/entities";
import { User } from "../models/loginCredentials";

async function findByEmail(email: string): Promise<userEnitites | null> {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export { findByEmail };
