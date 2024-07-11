import { User } from "../models/userModel";
import { IUserRequestEntities } from "../../../../domain/entities/userEntities";

export const insertUser = async(data: IUserRequestEntities) => {
  try {
    const user = new User({
      _id: data._id,
      username: data.username,
      email: data.email,
      password: data.password,
    });
    await user.save();
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
