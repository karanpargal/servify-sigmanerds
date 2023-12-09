import HeroIcons from "../shared/HeroIcons";

type Service = {
  title: string;
  description: string;
  price: number;
  category: string;
  rating: string;
  imageUrl: string;
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
  provider: {
    imageUrl: string;
    name: string;
  };
};
type Props = {
  service: Service;
};

function ProvidedServicesCard({ service }: Props) {
  return (
    <div>
      <div className="flex flex-row gap-6 overflow-hidden rounded-md border border-stone-100 bg-background-secondary shadow-card p-3">
        <img
          src={service.imageUrl}
          className="aspect-[15/9] h-40 w-40  object-cover"
        />

        <div className="flex-1 space-y-6">
          <div className="mx-10 flex justify-between text-status-upcoming ">
            <h2 className=" overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
              {service.title}
            </h2>
            <div className="text-text-secondary flex gap-x-2 text-ellipsis ">
              <button>
                <img
                  src={service.provider.imageUrl}
                  className="aspect-square w-8 rounded-full object-cover"
                />
              </button>
              <span>{service.provider.name}</span>
            </div>
          </div>

          <p className="text-text-secondary mx-10 flex gap-x-2 text-ellipsis">
            asdasdasga lorem ipsum ipsum
          </p>

          
            <div className="flex items-center justify-between mx-10 text-status-upcoming">
            <div>
              {service.category}
            </div>

            <div className="flex">
              <HeroIcons.CurrencyRupeeIcon className="w-5 h-auto"/>
              {service.price}
            </div>

            <div>
              {service.rating}
            </div>
            
         

          </div>
          
          <div className='mx-10 flex justify-between text-status-upcoming '>
            {service.reviews.map((review)=>{
              return(
                <>
                <p>
                  {review.user}
                </p>
                <p className=''>
                  {review.rating}
                </p>
                <p>
                  {review.comment}
                </p>

                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProvidedServicesCard;
