import { HeroSolidIcons } from '@/components/shared/HeroIcons';
import { ServiceClientType } from '../../../../server/services/services.schema';

type Props = {
  service: ServiceClientType;
};
export default function FeaturedServiceCard({ service }: Props) {
  return (
    <div className="w-full min-w-[320px] max-w-md overflow-hidden rounded-lg border border-stone-200">
      <img
        src="https://promkraftinterior.com/wp-content/uploads/2021/11/kitchen-cleaning.jpg"
        className="aspect-[2/1] w-full"
      />
      <div className="px-3 py-2">
        <h1 className="text-sm font-semibold">{service.name}</h1>
        <p className="mt-1 text-xs text-text-secondary">
          Offered by: {service.seller.name}
        </p>
        <footer className="mt-2 flex items-end justify-between">
          <p className="flex items-center text-xs">
            <HeroSolidIcons.StarIcon className="mr-2 h-auto w-4 stroke-stone-400 stroke-[1px] text-amber-300 " />{' '}
            {service.ratings || '-'} ({service.numOfReviews || '-'})
          </p>
          <p className="text-sm font-semibold">
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
            }).format(service.price)}
          </p>
        </footer>
      </div>
    </div>
  );
}
