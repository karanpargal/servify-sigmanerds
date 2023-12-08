import React from 'react'
import HeroIcons from './shared/HeroIcons'

const Footer = () => {
  return (
    <div>
        <div className='flex justify-center border mt-10'>

        <div className='flex flex-row gap-x-10 p-10 w-[600px] justify-between '>
        <div className='flex flex-row gap-2'>
        <div className='flex  '>
          <HeroIcons.QuestionMarkCircleIcon className='w-8 h-auto'/>

        </div>
        <div className='flex'>
          <h1 className='text-2xl'>
         FAQs
          </h1>

        </div>


      </div>
            <div className='flex flex-col gap-5 mr-20 '>
               <h1 className='text-2xl' >About us</h1> 
               
                
            </div>

        </div>

        </div>
      

      
    </div>
  )
}

export default Footer