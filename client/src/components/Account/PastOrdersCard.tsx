import HeroIcons from '../shared/HeroIcons';

const PastOrdersCard = () => {
  return (
    <div>
      <div className="flex flex-row gap-2">
        <div className="flex  ">
          <HeroIcons.TruckIcon className="h-auto w-8" />
        </div>
        <div className="flex">
          <h1 className="text-2xl">Previous Orders</h1>
        </div>
      </div>
    </div>
  );
};

export default PastOrdersCard;
