import { PushAPI } from "@pushprotocol/restapi";
import { ENV } from "@pushprotocol/restapi/src/lib/constants";
import { ethers } from "ethers";

export const createTokenGatedChannel = async (
  channelName: string,
  description: string
) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.RPC_ENDPOINT_POLYGON!
    );
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
    const adminUser = await PushAPI.initialize(signer, { env: ENV.STAGING });
    const newGroup = await adminUser.chat.group.create(channelName, {
      description: description,
      image: "12",
      members: [],
      admins: ["0xAcEf0600cF20d5236111cCeE4Ce54013C9123e62"],
      private: false,
      rules: {
        entry: { conditions: [] },
        chat: { conditions: [] },
      },
    });

    console.log(newGroup);
  } catch (error) {
    throw error;
  }
};
