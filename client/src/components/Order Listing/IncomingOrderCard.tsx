import HeroIcons from '../shared/HeroIcons';

const IncomingOrderCard = () => {
  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold ">Incoming Orders</h1>
      <div className=' rounded-md border border-stone-100 bg-background-secondary shadow-card'>
      <div className="m-4 px-4 flex flex-row justify-between ">
        <div className="flex  ">Thumbnail</div>

        <div className="text-xl font-semibold">Order Name</div>
      </div>

      <div className="flex flex-row justify-between mb-4 mx-4  ">
        <div className="text-status-cancelled flex gap-2">
          <HeroIcons.XMarkIcon className="h-auto w-4 " />
          Reject orders
        </div>
        <div className="text-status-inprogress flex gap-2">
          <HeroIcons.ArrowPathIcon className="h-auto w-4 animate-spin [animation-duration:_2.5s]" />
          Reschedule Orders
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default IncomingOrderCard;
