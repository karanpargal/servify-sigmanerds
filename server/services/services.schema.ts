import mongoose, { mongo } from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter service name"],
    trim: true,
    maxLength: [100, "Service name cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter service price"],
    maxLength: [5, "Service price cannot exceed 5 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter service description"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: [true, "Please enter service category"],
    enum: {
      values: [
        "Software Development",
        "Plumbing",
        "Electrical",
        "Carpentry",
        "Cleaning",
      ],
      message: "Please select correct category for service",
    },
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please enter service seller"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Service ||
  mongoose.model("Service", serviceSchema);

export type ServiceType = {
  name: string;
  price: number;
  description: string;
  ratings: number;
  category: string;
  seller: mongoose.Schema.Types.ObjectId;
  numOfReviews: number;
  reviews: {
    user: mongoose.Schema.Types.ObjectId;
    rating: number;
    comment: string;
  }[];
  createdAt: Date;
};
