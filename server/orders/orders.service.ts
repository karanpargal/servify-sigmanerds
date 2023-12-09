import { ethers } from "ethers";
import { escrowContractABI, escrowContractAddress } from "../consts/escrow";
import orderSchema, { OrderType } from "./orders.schema";

const createOrder = async (order: OrderType) => {
  try {
    const newOrder = await orderSchema.create(order);
    const seller = await newOrder.populate("seller").execPopulate();

    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL!);
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
    const contract = new ethers.Contract(
      escrowContractAddress,
      escrowContractABI,
      signer
    );
    const tx = await contract.createOrder(newOrder._id, seller.walletAddress);
    await tx.wait();
    return newOrder;
  } catch (error) {
    throw error;
  }
};

const getOrder = async (id: string) => {
  try {
    const order = await orderSchema
      .findById(id)
      .populate("service")
      .populate("consumer")
      .populate("seller");
    if (!order) {
      throw new Error("Order not found");
    }
    return order;
  } catch (error) {
    throw error;
  }
};

const getOrdersByConsumer = async (consumer: string) => {
  try {
    const orders = await orderSchema
      .find({ consumer })
      .populate("service")
      .populate("consumer")
      .populate("seller");
    return orders;
  } catch (error) {
    throw error;
  }
};

const getOrdersBySeller = async (seller: string) => {
  try {
    const orders = await orderSchema
      .find({ seller })
      .populate("service")
      .populate("consumer")
      .populate("seller");
    return orders;
  } catch (error) {
    throw error;
  }
};

const getOrders = async () => {
  try {
    const orders = await orderSchema
      .find({})
      .populate("service")
      .populate("consumer")
      .populate("seller");
    return orders;
  } catch (error) {
    throw error;
  }
};

const updateOrder = async (id: string, order: OrderType) => {
  try {
    const updatedOrder = await orderSchema
      .findByIdAndUpdate(id, order, {
        new: true,
      })
      .populate("service")
      .populate("consumer")
      .populate("seller");
    return updatedOrder;
  } catch (error) {
    throw error;
  }
};

const deleteOrder = async (id: string) => {
  try {
    const deletedOrder = await orderSchema.findByIdAndDelete(id);
    return deletedOrder;
  } catch (error) {
    throw error;
  }
};

export {
  createOrder,
  deleteOrder,
  getOrder,
  getOrders,
  getOrdersByConsumer,
  getOrdersBySeller,
  updateOrder,
};
