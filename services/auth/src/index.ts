import server from "./presentation/server";
import dbConnection from "./infrastructure/database/mongodb/dbConnection";

//*iife
async () => {
  try {
    server;
    await dbConnection();
  } catch (error: any) {
    console.error(error?.message || "any error occured");
    process.exit(1);
  }
};
