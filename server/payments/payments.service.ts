import { ethers } from "ethers";
import { escrowContractABI, escrowContractAddress } from "../consts/escrow";

export const transferToSeller = async (orderId: string): Promise<string> => {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL!);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  const contract = new ethers.Contract(
    escrowContractAddress,
    escrowContractABI,
    signer
  );
  const transaction = await contract.completeTransaction(orderId);
  return transaction.hash;
};

export const refundTransaction = async (orderId: string): Promise<string> => {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL!);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  const contract = new ethers.Contract(
    escrowContractAddress,
    escrowContractABI,
    signer
  );
  const transaction = await contract.refundTransaction(orderId);
  return transaction.hash;
};
