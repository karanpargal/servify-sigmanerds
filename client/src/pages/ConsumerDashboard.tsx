import React from 'react';
import TimelineCard from '@/components/TimelineCard';
import ConsumerOrdersTable from '@/components/ConsumerOrdersTable';

const ConsumerDashboard = () => {
  return (
    <div>
      
        <div className="flex flex-col-2 m-20  ">

          <div className="flex flex-col flex-1 w-full pr-12">
            <div className=" flex flex-row border  ">
              explore the services
            </div>

            <div className=" flex flex-row border  ">
              <ConsumerOrdersTable/>
            </div>
          </div>


          <div className="flex flex-col w-[400px]">
            {/* timeline card */}
            <div className=" flex flex-row  ">
             
              <TimelineCard/>
            </div>

            <div className=" flex flex-row  ">
              explore the services
            </div>
          </div>

          
        </div>
     
    </div>
  );
};

export default ConsumerDashboard;
