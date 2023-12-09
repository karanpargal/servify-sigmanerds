import cors from "cors";
import { config as DotenvConfig } from "dotenv";
import express, { type Express, type Request, type Response } from "express";
import nftRouter from "./nft/nft.routes";
import notificationRouter from "./notifications/notifications.routes";
import orderRouter from "./orders/orders.routes";
import paymentsRouter from "./payments/payments.routes";
import serviceRouter from "./services/services.routes";
import userRouter from "./users/users.routes";
import { connectDB } from "./utils/connectDB";
DotenvConfig();
connectDB();

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/services", serviceRouter);
app.use("/api/v1/orders", orderRouter);
app.use("/api/v1/payments", paymentsRouter);
app.use("/api/v1/notifications", notificationRouter);
app.use("/api/v1/nft", nftRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to V1 API of our project");
});

app.use("*", (req: Request, res: Response) => {
  res.status(404).send("Not Found");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
