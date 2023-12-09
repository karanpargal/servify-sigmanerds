import TimelineCard from '@/components/TimelineCard';

import ProvidedServicesCard from '@/components/Account/ProvidedServicesCard';

import FeaturedServices from '@/components/Dashboard/FeaturedServices';
import useCustomerServiceListings from '@/hooks/useCustomerServiceListings';
import useUserData from '@/hooks/useUserData';

export default function Dashboard() {
  const user = useUserData();
  const serviceListings = useCustomerServiceListings();

  const role = user.data?.preference ?? 'consumer';

  return (
    <main className="min-h-screen">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] gap-6 p-6">
        {/* Left col */}
        <div className="min-w-0 space-y-6">
          {role === 'consumer' && <FeaturedServices />}
          {/* {role === 'provider' && <UpcomingServiceRequest />} */}
          <section className="rounded-xl bg-background-secondary p-4 shadow-card">
            <h1 className="mb-4 text-xl font-semibold">
              Checkout available services
            </h1>
            {serviceListings.data.map((service) => (
              <ProvidedServicesCard
                service={{
                  _id: service._id,
                  title: service.name,
                  description: service.description,
                  price: service.price,
                  rating: service.ratings?.toString() || '',
                  category: service.category,
                  provider: {
                    _id: service.seller._id,
                    name: service.seller.name,
                  },
                  reviews: service.reviews || [],
                }}
              />
            ))}
            {/* <FrequentOrdersCard />
            <FrequentOrdersCard />
            <FrequentOrdersCard /> */}
          </section>
        </div>
        {/* Right cols */}
        <div className="rounded-xl bg-background-secondary p-4 shadow-card">
          <TimelineCard />
        </div>
      </div>
    </main>
  );
}
