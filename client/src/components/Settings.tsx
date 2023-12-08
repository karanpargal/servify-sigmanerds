import React from 'react'
import HeroIcons from './shared/HeroIcons'

const Settings = () => {
  return (
    <div>
      <div className='flex flex-row gap-2 mr-[105px]'>
        <div className='flex  '>
          <HeroIcons.Cog8ToothIcon className='w-8 h-auto'/>

        </div>
        <div className='flex'>
          <h1 className='text-2xl'>
           Settings
          </h1>

        </div>


      </div>
    </div>
  )
}

export default Settings