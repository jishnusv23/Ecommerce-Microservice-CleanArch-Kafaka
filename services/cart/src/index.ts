import dbConnection from "./infrastructure/database/dbConnection";
import server from "./presentation/server";
import { runConsumer } from "./infrastructure/kafka/consumer";

(async () => {
  try {
    server;

    await Promise.all([dbConnection(), runConsumer()])
      .then(() => {
        console.log("kafka is consumer is running");
      })
      .catch((error) => {
        console.error("Error while kafka consumer runing", error);
        process.exit(0);
      });
  } catch (error: any) {
    console.error("Error during initialization", error?.message);
    process.exit(1);
  } finally {
    process.on("SIGINT", async () => {
      console.log("\n\nServer runing is shutting down........");
      process.exit(0)
    });
  }
})()
