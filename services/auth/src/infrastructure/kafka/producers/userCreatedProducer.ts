import { producer } from "..";
import { userEnitites } from "../../../domain/entities";

export const userCreatedProducer = async (data: userEnitites) => {
  try {
    await producer.connect();
    console.log(data.role, "this is the role");
    if (data.role == "user" || data.role == "admin") {
      const message = {
        topic: "to-user1",
        messages: [
          {
            key: "userCreated",
            value: JSON.stringify(data),
          },
        ],
      };
      console.log(
        "🚀 ~ file: userCreatedProducer.ts:18 ~ userCreatedProducer ~ message:",
        message
      );

      await producer.send(message);
    } else {
      throw new Error("undefined role");
    }
  } catch (error: any) {
    console.error(error?.message);
  } finally {
    await producer.disconnect();
  }
};
