import { useNavigate } from 'react-router-dom';
import HeroIcons from '../shared/HeroIcons';

type Service = {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: string;
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
  provider: {
    _id: string;
    name: string;
  };
};
type Props = {
  service: Service;
};

function ProvidedServicesCard({ service }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/book-service', { state: { service: service } });
  };

  return (
    <div>
      <div
        className="flex flex-row gap-6 overflow-hidden rounded-md border border-stone-100 bg-background-secondary p-3 shadow-card"
        onClick={() => {
          handleClick();
        }}
      >
        {/* <img
          src={service.imageUrl}
          className="aspect-[15/9] h-40 w-40  object-cover"
        /> */}

        <div className="flex-1 space-y-6">
          <div className="mx-10 flex justify-between text-status-upcoming ">
            <h2 className=" overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
              {service.title}
            </h2>
            <div className="flex gap-x-2 text-ellipsis text-text-secondary ">
              <button>
                {/* <img
                  src={service.provider.imageUrl}
                  className="aspect-square w-8 rounded-full object-cover"
                /> */}
              </button>
              <span>By {service.provider.name}</span>
            </div>
          </div>

          <div className="mx-10 flex flex-col gap-x-2 text-ellipsis text-text-secondary">
            <p className="font-semibold">About the service</p>
            <p>{service.description}</p>
          </div>

          <div className="mx-10 flex items-center justify-between text-status-upcoming">
            <div>
              <span className="text-text-secondary">Category: </span>{' '}
              {service.category}
            </div>

            <div className="flex">
              <HeroIcons.CurrencyRupeeIcon className="h-auto w-5" />
              {service.price}
            </div>

            <div className="flex items-center gap-x-1">
              <HeroIcons.StarIcon className="h-4 w-4" />
              {service.rating}
            </div>
          </div>

          <div className="mx-10 flex justify-between text-status-upcoming ">
            {service.reviews.map((review) => {
              return (
                <>
                  <p>{review.user}</p>
                  <p className="">{review.rating}</p>
                  <p>{review.comment}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProvidedServicesCard;
