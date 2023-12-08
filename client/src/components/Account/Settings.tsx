import HeroIcons from '../shared/HeroIcons';

const Settings = () => {
  return (
    <div>
      <div className="mr-[105px] flex flex-row gap-2">
        <div className="flex  ">
          <HeroIcons.Cog8ToothIcon className="h-auto w-8" />
        </div>
        <div className="flex">
          <h1 className="text-2xl">Settings</h1>
        </div>
      </div>
    </div>
  );
};

export default Settings;
