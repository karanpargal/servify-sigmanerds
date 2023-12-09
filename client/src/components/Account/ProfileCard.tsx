import useUserData from '@/hooks/useUserData';
import useWallet from '@/hooks/useWallet';

const ProfileCard = () => {
  const { address, balance } = useWallet();
  const user = useUserData();

  return (
    <div>
      <div className="mt-10 flex justify-center border">
        <div className="flex w-[600px] flex-row justify-between gap-x-10 p-10 ">
          <div className="flex flex-col   ">img</div>
          <div className="mr-20 flex w-1/2 flex-col gap-5">
            <h1 className="text-4xl">{user.data?.name}</h1>
            <p className="truncate text-xl">{address}</p>
            <p>{balance?.formatted}</p>
            <p>{user.data?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
