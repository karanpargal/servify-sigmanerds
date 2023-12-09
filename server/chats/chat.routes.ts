import type { Request, Response } from "express";
import { Router } from "express";
import { createTokenGatedChannel } from "./chats.services";

const chatRouter = Router();

const handleCreateTokenGatedChannel = async (req: Request, res: Response) => {
  const { channelName, description } = req.body;
  try {
    const channel = await createTokenGatedChannel(channelName, description);
    res.status(200).json({ success: true, channel });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
};

chatRouter.post("/create-token-gated-channel", handleCreateTokenGatedChannel);

export default chatRouter;
