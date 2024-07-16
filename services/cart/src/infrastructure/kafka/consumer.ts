import { consumer } from ".";
import { creatSubscriber } from "./subscriber";
import { stopConsumer } from "./stopConsumer";

export const runConsumer = async () => {
  try {
    await consumer.connect();

    await consumer.subscribe({
      topic: "to-user1",
      fromBeginning: true,
    });

    await consumer.subscribe({
      topic: "product",
      fromBeginning: true,
    });

    const subscriber: any = creatSubscriber();

    await consumer.run({
      eachMessage: async ({ message }) => {
        const { key, value } = message;
        const subscriberMethod = String(key);
        const subscriberData = JSON.parse(String(value));

        try {
          await subscriber[subscriberMethod](subscriberData);
        } catch (error: any) {
          console.error(
            `Error processing message from topic:${error?.message}`
          );
          await stopConsumer();
          throw new Error(error?.message);
        }
      },
    });
  } catch (error: any) {
    console.error("Consumer message",error);
    throw new Error(error?.message)
  }
};
