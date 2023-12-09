import IncomingOrderCard from '@/components/Order Listing/IncomingOrderCard'

const OrderListing = () => {
  return (
    <div>
        <div className='flex  '>
            <div className='mx-auto mb-12 mt-32 w-1/3 rounded-xl bg-background-secondary p-6 pt-14'>
                <IncomingOrderCard/>
            </div>
            

        </div>
    </div>
  )
}

export default OrderListing