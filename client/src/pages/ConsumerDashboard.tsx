import TimelineCard from '@/components/TimelineCard';

import FrequentOrdersCard from '@/components/FrequentOrdersCard';
import RecommendedServiceCard from '@/components/RecommendedServiceCard';


const ConsumerDashboard = () => {
  return (
    <div>
      
        <div className="flex flex-col-2 m-20  ">

          <div className="flex flex-col flex-1 w-full pr-12">
            <div className=" flex flex-row border pl-10 gap-x-8 p-10">
             <RecommendedServiceCard/>
            </div>

            <div className=" flex flex-col border pl-10 mt-10 p-10 ">
                <h1>Frequently Ordered Services</h1>
              <FrequentOrdersCard/>
              <FrequentOrdersCard/>
              <FrequentOrdersCard/>
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
