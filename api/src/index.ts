import express from "express";
// import cookieParser from "cookie-parser";
import cors from "cors";
import proxy from "express-http-proxy";
import dotevn from "dotenv";
import morgan from "morgan";

dotevn.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
// app.use(cookieParser());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  console.log("api server is runnig ");
  res.json({ success: true,meaasa:"sds-----hhhhhh------d" });
});
app.use("/auth", proxy("http://localhost:3000"));
app.use("/product",proxy("http://localhost:4000"))
app.use('/cart',proxy("http://localhost:6000"))
app.use('/admin',proxy('http://localhost:5000'))

app.listen(PORT, () => {
  console.log("workign api");
});
