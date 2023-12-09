import { Link } from 'react-router-dom';
import HeroIcons from '../shared/HeroIcons';

const PastOrdersCard = () => {
  return (
    <div>
      <div className="flex flex-row items-start gap-2 rounded-xl px-3 py-1">
        <div className="flex ">
          <HeroIcons.TruckIcon className="h-8 w-8" />
        </div>
        <div className="flex">
          <h1 className="text-2xl">
            <Link to="/orders">Orders</Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PastOrdersCard;
