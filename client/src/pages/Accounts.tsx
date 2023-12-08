import Footer from '@/components/Footer'
import HelpAndSupport from '@/components/HelpAndSupport'
import ManageAccounts from '@/components/ManageAccounts'
import PastOrdersCard from '@/components/PastOrdersCard'

import ProfileCard from '@/components/ProfileCard'
import Settings from '@/components/Settings'
import React from 'react'

const Accounts = () => {
  return (
    <div className='container border'>
        <div className='flex justify-center '>
            <div className='flex-row'>
                <div>
                <ProfileCard/>

                </div>

                <div className='flex justify-between m-4 mt-10 '>
                    <div>
                        <PastOrdersCard/>
                    </div>
                    <div>
                        <HelpAndSupport/>

                    </div>
                </div>

                <div className='flex justify-between m-4 mt-10 '>
                    <div>
                      <ManageAccounts/>
                    </div>
                    <div>
                       <Settings/>

                    </div>

                </div>

                <div>
                <Footer/>

                </div>
           

            </div>
           
        </div>

    </div>
  )
}

export default Accounts