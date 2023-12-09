import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  age: {
    type: Number,
    required: [true, "Please provide an age"],
  },
  sex: {
    type: String,
    required: [true, "Please provide a sex"],
  },
  bio: {
    type: String,
  },
  preference: {
    type: String,
    required: [true, "Please provide a preference"],
  },
  walletAddress: {
    type: String,
    required: [true, "Please provide a wallet address"],
  },
  addresses: {
    type: Array,
    required: [true, "Please provide an address"],
  },
});

export const User = mongoose.model("User", userSchema);

export type UserClientType = mongoose.HydratedDocumentFromSchema<
  typeof userSchema
>;

export type UserType = {
  name: string;
  email: string;
  age: number;
  sex: string;
  bio: string;
  preference: "provider" | "consumer";
  walletAddress: string;
  addresses: string[];
};
