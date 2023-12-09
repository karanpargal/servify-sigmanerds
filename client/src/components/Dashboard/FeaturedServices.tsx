import useCustomerServiceListings from '@/hooks/useCustomerServiceListings';
import FeaturedServiceCard from './FeaturedServiceCard';

export default function FeaturedServices() {
  const { data: services = [] } = useCustomerServiceListings();
  return (
    <section className="rounded-xl bg-background-secondary p-4 shadow-card">
      <h1 className="mb-3 text-2xl font-bold">Recommended Services</h1>
      <div className="overflow-y-scroll py-3">
        <div className="flex gap-4">
          {services.map((service) => (
            <FeaturedServiceCard service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
