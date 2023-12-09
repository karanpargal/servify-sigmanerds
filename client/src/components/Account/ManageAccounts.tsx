import useWallet from '@/hooks/useWallet';
import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import HeroIcons from '../shared/HeroIcons';
import { useToast } from '../ui/use-toast';

const ManageAccounts = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const { address } = useWallet();
  const { toast } = useToast();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setNewName(''); // Reset the new name when closing the modal
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
      `http://localhost:8080/api/v1/users/${address}`,
      {
        name: newName,
      },
    );

    const { data } = resp;

    console.log(data);

    // Close the modal
    closeModal();
  };

  return (
    <div>
      <div className="mr-1 flex flex-row gap-2" onClick={openModal}>
        <div className="flex">
          <HeroIcons.UserCircleIcon className="h-auto w-8" />
        </div>
        <div className="flex">
          <h1 className="text-2xl hover:cursor-pointer">Manage Account</h1>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center">
          <div className="rounded-md bg-white p-4 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">Change Name</h2>
            <label className="mb-2 block">
              New Name:
              <input
                type="text"
                value={newName}
                onChange={handleNameChange}
                className="w-full rounded-md border border-gray-300 p-2"
              />
            </label>
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
