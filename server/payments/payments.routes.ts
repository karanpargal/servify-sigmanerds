import type { Request, Response } from "express";
import { Router } from "express";
import { refundTransaction, transferToSeller } from "./payments.service";

const paymentsRouter = Router();

const handleTransferToSeller = async (req: Request, res: Response) => {
  try {
    const transaction = await transferToSeller(req.params.orderId);
    res.status(200).json(transaction);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleRefundTransaction = async (req: Request, res: Response) => {
  try {
    const transaction = await refundTransaction(req.params.orderId);
    res.status(200).json(transaction);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

paymentsRouter.route("transfer/:orderId").post(handleTransferToSeller);
paymentsRouter.route("refund/:orderId").post(handleRefundTransaction);

export default paymentsRouter;
