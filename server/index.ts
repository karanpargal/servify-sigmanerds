import express, { type Express, type Request, type Response } from "express";
import { config as DotenvConfig } from "dotenv";
import { connectDB } from "./utils/connectDB";
import cors from "cors";
import userRouter from "./users/users.routes";
import serviceRouter from "./services/services.routes";
DotenvConfig();
connectDB();

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/services", serviceRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.use("*", (req: Request, res: Response) => {
  res.status(404).send("Not Found");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
