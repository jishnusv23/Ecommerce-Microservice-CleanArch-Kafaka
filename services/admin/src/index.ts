import server from "./presentation/server";
import dbConnection from "./infrastructure/database/dbConnection";

(async () => {
  try {
    server;
    await dbConnection().catch((err: any) => {
      console.error("Database connection error admin-service", err);
      process.exit(1);
    });
    console.log("admin service successfully------>👽 ");
  } catch (error: any) {
    console.error("something wrong", error?.message);
    process.exit(1);
  }
})()
