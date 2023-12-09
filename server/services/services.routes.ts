import type { Request, Response } from "express";
import { Router } from "express";
import {
  createService,
  deleteService,
  getService,
  getServices,
  getUsersServices,
  updateService,
} from "./services.service";

const serviceRouter = Router();

const handleCreateService = async (req: Request, res: Response) => {
  try {
    const service = await createService(req.body);
    res.status(201).json(service);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleUsersServices = async (req: Request, res: Response) => {
  try {
    const sellerID = req.params.seller;
    const services = await getUsersServices(sellerID);
    res.status(201).json(services);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleGetService = async (req: Request, res: Response) => {
  try {
    const service = await getService(req.params.id);
    res.status(200).json(service);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleGetServices = async (req: Request, res: Response) => {
  try {
    const services = await getServices();
    res.status(200).json(services);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleUpdateService = async (req: Request, res: Response) => {
  try {
    const service = await updateService(req.params.id, req.body);
    res.status(200).json(service);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleDeleteService = async (req: Request, res: Response) => {
  try {
    const service = await deleteService(req.params.id);
    res.status(200).json(service);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

serviceRouter.route("/").get(handleGetServices).post(handleCreateService);
serviceRouter
  .route("/:id")
  .get(handleGetService)
  .put(handleUpdateService)
  .delete(handleDeleteService);
serviceRouter.route("/seller/:seller").get(handleUsersServices);

export default serviceRouter;
