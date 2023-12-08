import { Router } from "express";
import type { Request, Response } from "express";
import {
  createOrder,
  getOrder,
  getOrders,
  updateOrder,
  deleteOrder,
  getOrdersByConsumer,
  getOrdersBySeller,
} from "./orders.service";

const orderRouter = Router();

const handleCreateOrder = async (req: Request, res: Response) => {
  try {
    const order = await createOrder(req.body);
    res.status(201).json(order);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleGetOrder = async (req: Request, res: Response) => {
  try {
    const order = await getOrder(req.params.id);
    res.status(200).json(order);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleGetOrders = async (req: Request, res: Response) => {
  try {
    const orders = await getOrders();
    res.status(200).json(orders);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleUpdateOrder = async (req: Request, res: Response) => {
  try {
    const order = await updateOrder(req.params.id, req.body);
    res.status(200).json(order);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleDeleteOrder = async (req: Request, res: Response) => {
  try {
    const order = await deleteOrder(req.params.id);
    res.status(200).json(order);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleGetOrdersByConsumer = async (req: Request, res: Response) => {
  try {
    const orders = await getOrdersByConsumer(req.params.consumer);
    res.status(200).json(orders);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleGetOrdersBySeller = async (req: Request, res: Response) => {
  try {
    const orders = await getOrdersBySeller(req.params.seller);
    res.status(200).json(orders);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

orderRouter.route("/").get(handleGetOrders).post(handleCreateOrder);
orderRouter
  .route("/:id")
  .get(handleGetOrder)
  .put(handleUpdateOrder)
  .delete(handleDeleteOrder);
orderRouter.route("/consumer/:consumer").get(handleGetOrdersByConsumer);
orderRouter.route("/seller/:seller").get(handleGetOrdersBySeller);

export default orderRouter;
