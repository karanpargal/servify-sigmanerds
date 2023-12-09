import type { Request, Response } from "express";
import { Router } from "express";
import { mintNFT } from "./nft.service";

const nftRouter = Router();

const handleMintNFT = async (req: Request, res: Response) => {
  const { walletAddress } = req.body;
  try {
    await mintNFT(walletAddress);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ success: false, error });
  }
};

nftRouter.post("/mint-nft", handleMintNFT);

export default nftRouter;
