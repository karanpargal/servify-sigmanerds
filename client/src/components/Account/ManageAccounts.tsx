import HeroIcons from '../shared/HeroIcons';

const ManageAccounts = () => {
  return (
    <div>
      <div className="mr-1 flex flex-row gap-2">
        <div className="flex  ">
          <HeroIcons.UserCircleIcon className="h-auto w-8" />
        </div>
        <div className="flex">
          <h1 className="text-2xl">Manage Account</h1>
        </div>
      </div>
    </div>
  );
};

export default ManageAccounts;
