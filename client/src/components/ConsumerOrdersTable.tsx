import React from 'react';
import { useState } from 'react';

const ConsumerOrdersTable = () => {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <div className="flex gap-x-4 p-10">
        <div>
        <button onClick={()=>{setTab(0)}} className='flex '>Recomended services</button>

        </div>
        <div>
        <button onClick={()=>{setTab(1)}} className='flex '>Book Order</button>

        </div>
        
        
      </div>


      {tab == 0 ? 
      <div className='p-10'>
        <div className='flex flex-col gap-y-3'>

            <div className='flex flex-row'>
                <div>
                <h1>Order name</h1>
                <p>Provdier name</p>

                </div>
               
                <div className='flex ml-10'>
                    <p className='m-auto'>%Users using </p>
                </div>
            </div>

            <div className='flex flex-row'>
                <div>
                <h1>Order name</h1>
                <p>Provdier name</p>

                </div>
               
                <div className='flex flex'>
                    <p >%Users using </p>
                </div>
            </div>

            <div className='flex flex-row'>
                <div>
                <h1>Order name</h1>
                <p>Provdier name</p>

                </div>
               
                <div className='flex flex'>
                    <p>%Users using </p>
                </div>
            </div>
        </div>
      </div> 
      :<div className='p-10'><div>hey lo</div></div>}
    </div>
  );
};

export default ConsumerOrdersTable;
