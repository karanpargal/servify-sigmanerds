import useUserData from '@/hooks/useUserData';
import useWallet from '@/hooks/useWallet';
import HeroIcons from '../shared/HeroIcons';

const ProfileCard = () => {
  const { address, balance } = useWallet();
  const user = useUserData();

  return (
    <div>
      <div className="font-inter mt-4 flex justify-center">
        <div className="flex w-[600px] flex-row items-center justify-between gap-x-10 p-10  ">
          <div className="flex flex-col">
            <HeroIcons.UserCircleIcon className="h-20 w-20" />
          </div>
          <div className="mr-20 flex w-max flex-col gap-2">
            <h1 className="text-4xl ">{user.data?.name}</h1>
            <p className="truncate text-sm text-status-upcoming">{address}</p>
            <p>
              {balance?.formatted.slice(0, 5)} {balance?.symbol}
            </p>
            <p>{user.data?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
