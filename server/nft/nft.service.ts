import { ethers } from "ethers";
import { sbtABI, sbtAddress } from "../consts/sbt";

export const mintNFT = async (walletAddress: string) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL!);
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
    const contract = new ethers.Contract(sbtAddress, sbtABI, signer);
    const tx = await contract.safeMint(walletAddress, "Service NFT");
    await tx.wait();
    return tx.hash;
  } catch (error) {
    throw error;
  }
};
