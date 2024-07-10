import { hash, genSalt } from "bcrypt";

export const hashPassword = async (password: string) => {
  try {
    const hashedpassword = await hash(password, await genSalt(10));
    if (!hashedpassword) {
      throw new Error("Something error in password hashing!");
    }
    return hashedpassword;
  } catch (error:any) {
    throw new Error(error?.message)
  }
};
