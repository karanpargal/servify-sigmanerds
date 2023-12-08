import React from 'react'
import HeroIcons from './shared/HeroIcons'

const ManageAccounts = () => {
  return (
    <div>
    <div className='flex flex-row gap-2 mr-1'>
      <div className='flex  '>
        <HeroIcons.UserCircleIcon className='w-8 h-auto'/>
      
      </div>
      <div className='flex'>
        <h1 className='text-2xl'>
          Manage Account
        </h1>

      </div>


    </div>
  </div>
  )
}

export default ManageAccounts