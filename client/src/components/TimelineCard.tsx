import React from 'react';
import HeroIcons from './shared/HeroIcons';

const TimelineCard = () => {
  return (
    <div>
      <div className=" relative m-auto flex   flex-col w-96 gap-y-2 border p-10">
        <div className="flex gap-x-8">
            <HeroIcons.BellIcon className="h-8 w-10 mt-2" />
          
            <div className="">
              <h1 className="text-3xl">Order name</h1>
              <p className="text-xl">Description</p>
            </div>
        </div>

        <div className="flex gap-x-8">
            <HeroIcons.BellIcon className="h-8 w-10 mt-2" />
          
            <div className="">
              <h1 className="text-3xl">Order name</h1>
              <p className="text-xl">Description</p>
            </div>
        </div>

        <div className="flex gap-x-8">
            <HeroIcons.BellIcon className="h-8 w-10 mt-2" />
          
            <div className="">
              <h1 className="text-3xl">Order name</h1>
              <p className="text-xl">Description</p>
            </div>
        </div>

         



        
        
      </div>
    </div>
  );
};

export default TimelineCard;
