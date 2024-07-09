import express, { Application } from "express";
import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
import { authRoutes } from "../infrastructure/routes/authRoutes";
import { dependencies } from "../config/dependencies";
import morgan from "morgan";

dotenv.config();
const app: Application = express();
const PORT: number = Number(process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(morgan("dev"));
app.use("/", authRoutes(dependencies));

app.get("/test", (req,res) => {
  console.log("auth active");
  res.json({success:true})
});

app.listen(PORT, () => {
  console.log(`The auth-service listening to the port ${PORT}`);
});

export default app;
