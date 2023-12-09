<<<<<<< Updated upstream
const ProfileCard = ({ address, balance }: ProfileCardProps) => {
  return (
    <div>
      <div className="mt-10 flex justify-center border">
        <div className="flex w-[600px] flex-row justify-between gap-x-10 p-10 ">
          <div className="flex flex-col   ">img</div>
          <div className="mr-20 flex w-1/2 flex-col gap-5">
            <h1 className="text-4xl">UserName</h1>
            <p className="... truncate text-xl">{address}</p>
            <p>{balance}</p>
          </div>
=======

const ProfileCard = () => {
  return (
    <div>
        <div className='flex justify-center border mt-10'>

        <div className='flex flex-row gap-x-10 p-10 w-[600px] justify-between '>
            <div className='flex flex-col   '>
                img
            </div>
            <div className='flex flex-col mr-8 gap-5'>
               <h1 className='text-4xl'>UserName</h1>
               <p className='text-xl'>Wallet Id</p>
                
            </div>

>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

interface ProfileCardProps {
  address: string;
  balance: string;
}
