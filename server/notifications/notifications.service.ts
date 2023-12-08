import { PushAPI } from "@pushprotocol/restapi";
import { ENV } from "@pushprotocol/restapi/src/lib/constants";
import { ethers } from "ethers";

const notificationDetails = {
  Booked: {
    title: "New Booking",
    body: "You have a new booking request for one of your services.",
  },
  Accepted: {
    title: "Booking Accepted",
    body: "Your booking request has been accepted by the provider.",
  },
  Rejected: {
    title: "Booking Rejected",
    body: "Your booking request has been rejected by the provider. Any amount paid will be refunded.",
  },
  Cancelled: {
    title: "Booking Cancelled",
    body: "Your booking request has been cancelled by the provider. Any amount paid will be refunded.",
  },
  Started: {
    title: "Booking Started",
    body: "Your booking request has been started by the provider.",
  },
  Completed: {
    title: "Booking Completed",
    body: "Your booking request has been completed by the provider.",
  },
  PerformanceNFT: {
    title: "Performance NFT minted",
    body: "Your performance NFT has been minted for your past services.",
  },
};

const enum NotificationType {
  Booked = "Booked",
  Accepted = "Accepted",
  Rejected = "Rejected",
  Cancelled = "Cancelled",
  Started = "Started",
  Completed = "Completed",
  PerformanceNFT = "PerformanceNFT",
}

const channelSettings = [
  { type: 1, index: 1, default: true, description: "New Booking" },
  { type: 1, index: 2, default: true, description: "Booking Accepted" },
  { type: 1, index: 3, default: true, description: "Booking Rejected" },
  { type: 1, index: 4, default: true, description: "Booking Cancelled" },
  { type: 1, index: 5, default: true, description: "Booking Started" },
  { type: 1, index: 6, default: true, description: "Booking Completed" },
  { type: 1, index: 7, default: true, description: "Performance NFT minted" },
];

export const sendNotification = async (
  notificationType: NotificationType,
  walletAddress: string
) => {
  try {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.RPC_ENDPOINT_POLYGON!
    );
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
    const adminUser = await PushAPI.initialize(signer, { env: ENV.STAGING });
    const { title, body } = notificationDetails[notificationType];

    const userSubscriptions = await adminUser.notification.subscriptions({
      account: walletAddress,
    });

    const userSettings = userSubscriptions.filter(
      (subscription: any) =>
        subscription.channel === process.env.CHANNEL_ID?.toLowerCase()
    );

    const notificationInfo = JSON.parse(userSettings[0].user_settings).filter(
      (setting: any) => {
        return setting.description === title;
      }
    );

    const isSubbed = notificationInfo[0].user;

    if (!isSubbed) {
      return;
    }

    const sendNotif = await adminUser.channel.send([walletAddress], {
      notification: {
        title,
        body,
      },
    });

    return sendNotif.data;
  } catch (error: any) {
    console.log(error.message);
    throw error;
  }
};
