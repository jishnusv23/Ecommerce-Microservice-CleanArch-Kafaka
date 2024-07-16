import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { dependencies } from "../config/dependencies";
import { productRoute } from "../infrastructure/route/productRoute";

dotenv.config();

const app: Application = express();
const PORT: number = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(productRoute(dependencies));

//*error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  const errorResponse = {
    errors: [{ message: err?.message || "Something wrong in product-service" }],
  };
  return res.status(500).json(errorResponse);
});
//*listening set

app.listen(PORT, () => {
  console.log("The product-service is runing port" + PORT);
});

export default app;
