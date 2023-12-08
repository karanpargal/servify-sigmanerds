import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    consumer: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please enter consumer"],
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please enter service"],
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Please enter seller"],
    },
    address: {
      type: String,
      required: [true, "Please enter address"],
    },
    isAccepted: {
      type: Boolean,
      default: false,
    },
    amount: {
      type: Number,
      required: [true, "Please enter amount"],
      default: 0.0,
    },
    status: {
      type: String,
      required: [true, "Please enter status"],
      enum: {
        values: ["Pending", "Completed", "Refunded"],
        message: "Please select correct status for order",
      },
      default: "Pending",
    },
    paymentHash: {
      type: String,
    },
    paidAt: {
      type: Date,
    },
    completedAt: {
      type: Date,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);

export type OrderType = {
  consumer: string;
  service: string;
  seller: string;
  address: string;
  amount: number;
  status: string;
  paymentHash: string;
  paidAt: Date;
  completedAt: Date;
  isAccepted: boolean;
  createdAt: Date;
};
