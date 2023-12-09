import HeroIcons, { HeroSolidIcons } from '@/components/shared/HeroIcons';
import useCustomerOrderListing from '@/hooks/useCustomerOrderListing';
import { cn } from '@/utils';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import type { OrderClientType } from '../../../server/orders/orders.schema';
dayjs.extend(advancedFormat);

type OrderStatusEnum = OrderClientType['status'];

type Order = {
  title: string;
  description: string;
  price: number;
  scheduleDate?: Date;
  completionDate?: Date;
  status: OrderStatusEnum;
  providerName: string;
};
type Props = {
  order: Order;
};

function OrderCard({ order }: Props) {
  const getStatusIcon = () => {
    switch (order.status) {
      case 'Upcoming':
        return <HeroIcons.CalendarIcon className="h-auto w-4" />;
      case 'In Progress':
        return (
          <HeroIcons.ArrowPathIcon className="h-auto w-4 animate-spin [animation-duration:_2.5s]" />
        );
      case 'Completed':
        return <HeroIcons.CheckCircleIcon className="h-auto w-4" />;
      case 'Cancelled':
        return <HeroIcons.XCircleIcon className="h-auto w-4" />;
    }
  };

  return (
    <article className="overflow-hidden rounded-md border border-stone-100 bg-background-secondary shadow-card">
      <div
        className={cn(
          'flex items-center justify-between px-4 py-2 text-xs font-medium',
          {
            'bg-status-upcoming/10 text-status-upcoming':
              order.status === 'Upcoming',
            ' bg-status-inprogress/10 text-status-inprogress':
              order.status === 'In Progress',
            'bg-status-completed/10 text-status-completed':
              order.status === 'Completed',
            'bg-status-cancelled/10 text-status-cancelled':
              order.status === 'Cancelled',
          },
        )}
      >
        <span className="flex items-center gap-x-2">
          {getStatusIcon()}
          {order.status}
        </span>
        {['Upcoming', 'Completed'].includes(order.status) && (
          <>
            {order.scheduleDate && (
              <span className="text-text-primary">
                On {dayjs(order.scheduleDate).format('MMM Do, YY')}
              </span>
            )}
            {order.completionDate && (
              <span className="text-text-primary">
                On {dayjs(order.scheduleDate).format('h:mm a, MMM Do, YY')}
              </span>
            )}
          </>
        )}
      </div>
      <div className="flex justify-between p-4">
        <div className="min-w-0 flex-1">
          <h2 className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
            {order.title}
          </h2>
          <div className="mt-2 flex items-center gap-x-2 text-sm text-text-secondary">
            <HeroSolidIcons.UserCircleIcon className="h-auto w-6" />
            <span>{order.providerName}</span>
          </div>
        </div>
        {['In Progress', 'Upcoming'].includes(order.status) && (
          <button className="self-center rounded-lg bg-background-secondary p-2 transition-all hover:brightness-95 active:scale-90">
            <HeroIcons.ChatBubbleLeftIcon className="h-auto w-5" />
          </button>
        )}
      </div>
      {order.status === 'Upcoming' && (
        <footer className="text-sm text-background-secondary">
          <button className="flex w-full items-center justify-center gap-x-2 bg-accent-secondary py-3 transition-all hover:brightness-110 active:brightness-95">
            <HeroIcons.QrCodeIcon className="h-auto w-4" />
            Scan to start service
          </button>
        </footer>
      )}
    </article>
  );
}

export default function Orders() {
  const { data = [] } = useCustomerOrderListing();
  return (
    <main className="space-y-8 px-4 pb-12 pt-32">
      <section className="mx-auto max-w-3xl rounded-xl bg-background-secondary p-6 pt-0">
        <h1 className="py-14 text-4xl font-bold">Service requests</h1>
        <div className="space-y-6">
          {data.map((order) => (
            <OrderCard
              order={{
                title: order.service.name,
                description: order.service.description,
                scheduleDate: order.serviceDate,
                status: order.status,
                price: order.service.price,
                providerName: order.seller.name,
              }}
            />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-3xl rounded-xl bg-background-secondary p-6 pt-0">
        <h1 className="py-14 text-4xl font-bold">Your Orders</h1>
        <div className="space-y-6">
          {data.map((order) => (
            <OrderCard
              order={{
                title: order.service.name,
                description: order.service.description,
                scheduleDate: order.serviceDate,
                status: order.status,
                price: order.service.price,
                providerName: order.seller.name,
              }}
            />
          ))}

          {/* <OrderCard
          order={{
            title:
            'Kitchen and Bathroom Pest Control Kitchen and Bathroom Pest Control Kitchen and Bathroom Pest Control',
            description: 'Lorem ipsum',
            scheduleDate: new Date(),
            status: 'IN_PROGRESS',
            price: 100,
            provider: {
              name: 'Yashvardhan Jagnani',
              imageUrl: 'https://avatars.githubusercontent.com/u/60016972?v=4',
            },
          }}
          />
          <OrderCard
          order={{
            title:
            'Kitchen and Bathroom Pest Control Kitchen and Bathroom Pest Control Kitchen and Bathroom Pest Control',
            description: 'Lorem ipsum',
            completionDate: new Date(),
            status: 'COMPLETED',
            price: 100,
            provider: {
              name: 'Yashvardhan Jagnani',
              imageUrl: 'https://avatars.githubusercontent.com/u/60016972?v=4',
            },
          }}
          />
          <OrderCard
          order={{
            title:
            'Kitchen and Bathroom Pest Control Kitchen and Bathroom Pest Control Kitchen and Bathroom Pest Control',
            description: 'Lorem ipsum',
            scheduleDate: new Date(),
            status: 'CANCELLED',
            price: 100,
            provider: {
              name: 'Yashvardhan Jagnani',
              imageUrl: 'https://avatars.githubusercontent.com/u/60016972?v=4',
            },
          }}
        /> */}
        </div>
      </section>
    </main>
  );
}
