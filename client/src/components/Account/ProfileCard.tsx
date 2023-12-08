import React from 'react'

const ProfileCard = () => {
  return (
    <div>
        <div className='flex justify-center border mt-10'>

        <div className='flex flex-row gap-x-10 p-10 w-[600px] justify-between '>
            <div className='flex flex-col   '>
                img
            </div>
            <div className='flex flex-col mr-20 gap-5'>
               <h1 className='text-4xl'>UserName</h1>
               <p className='text-xl'>Wallet Id</p>
                
            </div>

        </div>

        </div>
      

      
    </div>
  )
}

export default ProfileCard