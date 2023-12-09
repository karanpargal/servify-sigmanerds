import HeroIcons from './shared/HeroIcons';

const TimelineCard = () => {
  return (
    <section>
      <div className=" relative m-auto flex   w-96 flex-col gap-y-2 border p-10">
        <div className="flex gap-x-8">
          <HeroIcons.BellIcon className="mt-2 h-8 w-10" />

          <div className="">
            <h1 className="text-3xl">Order name</h1>
            <p className="text-xl">Description</p>
          </div>
        </div>

        <div className="flex gap-x-8">
          <HeroIcons.BellIcon className="mt-2 h-8 w-10" />

          <div className="">
            <h1 className="text-3xl">Order name</h1>
            <p className="text-xl">Description</p>
          </div>
        </div>

        <div className="flex gap-x-8">
          <HeroIcons.BellIcon className="mt-2 h-8 w-10" />

          <div className="">
            <h1 className="text-3xl">Order name</h1>
            <p className="text-xl">Description</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineCard;
