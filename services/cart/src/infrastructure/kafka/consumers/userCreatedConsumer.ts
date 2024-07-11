import { insertUser } from "../../database/mongoDB/repositories/user";
import { IUserRequestEntities } from "../../../domain/entities/userEntities";

export default async (data: IUserRequestEntities) => {
  try {
    console.log("🚀 ~ file: userCreatedConsumer.ts:5 ~ data:", data);
    await insertUser(data)
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
