import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { dependencies } from "../config/dependencies";
import { cartRouter } from "../infrastructure/router/cartRouter";

dotenv.config();

const app: Application = express();
//*set the port
const PORT: number = 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cartRouter(dependencies));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  const errorResponse = {
    errors: [{ message: err?.message || "something wrong" }],
  };
  res.status(500).json({ errorResponse });
});

export default app;
