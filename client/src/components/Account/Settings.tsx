import useWallet from '@/hooks/useWallet';
import { CONSTANTS, PushAPI } from '@pushprotocol/restapi';
import { Button } from '@pushprotocol/uiweb';
import { useState } from 'react';
import HeroIcons from '../shared/HeroIcons';
import { Switch } from '../ui/switch';

interface NotificationDetails {
  [key: string]: {
    title: string;
    body: string;
  };
}

const notificationDetails: NotificationDetails = {
  Booked: {
    title: 'New Booking',
    body: 'You have a new booking request for one of your services.',
  },
  Accepted: {
    title: 'Booking Accepted',
    body: 'Your booking request has been accepted by the provider.',
  },
  Rejected: {
    title: 'Booking Rejected',
    body: 'Your booking request has been rejected by the provider. Any amount paid will be refunded.',
  },
  Cancelled: {
    title: 'Booking Cancelled',
    body: 'Your booking request has been cancelled by the provider. Any amount paid will be refunded.',
  },
  Started: {
    title: 'Booking Started',
    body: 'Your booking request has been started by the provider.',
  },
  Completed: {
    title: 'Booking Completed',
    body: 'Your booking request has been completed by the provider.',
  },
  PerformanceNFT: {
    title: 'Performance NFT minted',
    body: 'Your performance NFT has been minted for your past services.',
  },
};

const Settings = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { walletClient: signer } = useWallet();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const savePref = async () => {
    const pushUser = await PushAPI.initialize(signer, {
      env: CONSTANTS.ENV.STAGING,
    });

    const response = await pushUser.notification.subscribe(
      `eip155:11155111:0xC2e7D52caEecC220AF3f48785ebdF8b331a7B668`,
      {
        settings: [
          { enabled: true, value: 1 },
          { enabled: false },
          { enabled: true, value: 1 },
          { enabled: true, value: 1 },
          { enabled: true, value: 1 },
          { enabled: true, value: 1 },
          { enabled: true, value: 1 },
        ],
      },
    );

    console.log(response);
  };

  return (
    <div>
      <div
        className="mr-[105px] flex flex-row items-center gap-2"
        onClick={openModal}
      >
        <div className="flex">
          <HeroIcons.Cog8ToothIcon className="h-8 w-8" />
        </div>
        <div className="flex">
          <h1 className="text-2xl hover:cursor-pointer">Settings</h1>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center backdrop-blur-sm">
          <div className="rounded-md bg-white p-10 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">
              Notification Settings
            </h2>
            {Object.keys(notificationDetails).map((key) => (
              <div key={key} className="mb-2 flex items-center justify-between">
                <div className="w-96">
                  <h3 className="text-lg">{notificationDetails[key].title}</h3>
                </div>
                <Switch defaultChecked />
              </div>
            ))}
            <div className="mt-6">
              <Button
                className="rounded-lg bg-zinc-900 px-4 py-1 text-white"
                onClick={() => {
                  savePref();
                  closeModal();
                }}
              >
                Save
              </Button>
              <Button
                className="ml-4 rounded-lg bg-red-600 px-4 py-1 text-white"
                onClick={closeModal}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
