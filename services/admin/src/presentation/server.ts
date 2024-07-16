import express, { Application, Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { adminRouter } from "../infrastructure/router/adminRouter";
import { dependencies } from "../config/dependencies";

const app: Application = express();
const PORT: number = 5000;
// *runing kafkaa
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(adminRouter(dependencies));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  const errorResponse = {
    errors: [{ message: err?.message }],
  };
  return res.status(500).json(errorResponse);
});

app.listen(PORT,()=>{
    console.log(`admin-service is runing ${PORT}`)
})

export default app