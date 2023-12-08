import type { Request, Response } from "express";
import { Router } from "express";
import { sendNotification } from "./notifications.service";

const notificationRouter = Router();

const handleSendNotification = async (req: Request, res: Response) => {
  const { notificationType, walletAddress } = req.body;
  try {
    await sendNotification(notificationType, walletAddress);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

notificationRouter.post("/send-notification", handleSendNotification);

export default notificationRouter;
