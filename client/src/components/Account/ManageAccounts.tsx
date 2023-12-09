import useUserData from '@/hooks/useUserData';
import useWallet from '@/hooks/useWallet';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import HeroIcons from '../shared/HeroIcons';
import { useToast } from '../ui/use-toast';

const ManageAccounts = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [address, setAddress] = useState('');
  const { address: walletAddress } = useWallet();
  const { data: userData } = useUserData();
  const { toast } = useToast();
  const [newName, setNewName] = useState(userData?.name);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleSaveChanges = async () => {
    if (newName == '') {
      toast({
        title: 'Name cannot be empty',
        description: 'Please enter a valid name',
        variant: 'destructive',
      });
      return;
    }

    const resp = await axios.put(
      `http://localhost:8080/api/v1/users/${walletAddress}`,
      {
        name: newName,
        addresses: [...userData?.addresses, address],
      },
    );

    const { data } = resp;

    console.log(data);

    // Close the modal
    closeModal();
  };

  return (
    <div>
      <div
        className=" flex flex-row gap-2"
        onClick={openModal}
      >
        <div className="flex">
          <HeroIcons.UserCircleIcon className="h-8 w-8" />
        </div>
        <div className="flex">
          <h1 className="text-2xl hover:cursor-pointer">Manage Account</h1>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center backdrop-blur">
          <div className="h-auto w-1/2 rounded-md bg-white p-4 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">Your Information</h2>

            <label htmlFor="name">Name:</label>

            <input
              type="text"
              name="name"
              value={newName}
              onChange={handleNameChange}
              className="mb-4 mt-2 w-full rounded-md border border-gray-300 p-2"
            />

            <label htmlFor="address">Add a new address:</label>

            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mb-4 mt-2 w-full rounded-md border border-gray-300 p-2"
            />

            {userData &&
              userData.addresses &&
              userData.addresses.length > 0 && (
                <div className="mb-4">
                  <h3 className="mb-2 text-lg font-semibold">
                    Your Addresses:
                  </h3>
                  <ul>
                    {userData.addresses.map((pastAddress, index) => (
                      <li
                        key={index}
                        className="mb-2 flex items-center justify-between"
                      >
                        <span>{pastAddress}</span>
                        <HeroIcons.TrashIcon
                          className="mr-2 h-6 w-6 text-red-500 hover:cursor-pointer hover:opacity-50"
                          onClick={() => console.log(index)}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            <div className="flex justify-end">
              <button
                className="mr-2 rounded-md bg-zinc-900 px-4 py-2 text-white"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
              <button
                className="rounded-md bg-gray-300 px-4 py-2 text-black"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAccounts;
