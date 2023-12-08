import { OrderType } from "./orders.schema";
import orderSchema from "./orders.schema";

const createOrder = async (order: OrderType) => {
  try {
    const newOrder = await orderSchema.create(order);
    return newOrder;
  } catch (error) {
    throw error;
  }
};

const getOrder = async (id: string) => {
  try {
    const order = await orderSchema.findById(id);
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
    const orders = await orderSchema.find({ consumer });
    return orders;
  } catch (error) {
    throw error;
  }
};

const getOrdersBySeller = async (seller: string) => {
  try {
    const orders = await orderSchema.find({ seller });
    return orders;
  } catch (error) {
    throw error;
  }
};

const getOrders = async () => {
  try {
    const orders = await orderSchema.find({});
    return orders;
  } catch (error) {
    throw error;
  }
};

const updateOrder = async (id: string, order: OrderType) => {
  try {
    const updatedOrder = await orderSchema.findByIdAndUpdate(id, order, {
      new: true,
    });
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
  getOrder,
  getOrdersByConsumer,
  getOrdersBySeller,
  getOrders,
  updateOrder,
  deleteOrder,
};
