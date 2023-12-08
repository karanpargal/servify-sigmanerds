import type { Request, Response } from "express";
import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "./users.service";

const userRouter = Router();

const handleCreateUser = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleGetUser = async (req: Request, res: Response) => {
  try {
    const user = await getUser(req.params.walletAddress);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleGetUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleUpdateUser = async (req: Request, res: Response) => {
  try {
    const user = await updateUser(req.params.walletAddress, req.body);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const handleDeleteUser = async (req: Request, res: Response) => {
  try {
    const user = await deleteUser(req.params.walletAddress);
    res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

userRouter.route("/").get(handleGetUsers).post(handleCreateUser);

userRouter
  .route("/:walletAddress")
  .get(handleGetUser)
  .put(handleUpdateUser)
  .delete(handleDeleteUser);

export default userRouter;
