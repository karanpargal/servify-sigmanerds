import HeroIcons from '@/components/shared/HeroIcons';
import { cn } from '@/utils';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

type OrderStatusEnum = 'UPCOMING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';

type Order = {
  title: string;
  description: string;
  price: number;
  scheduleDate?: Date;
  completionDate?: Date;
  status: OrderStatusEnum;
  provider: {
    imageUrl: string;
    name: string;
  };
};
type Props = {
  order: Order;
};

function OrderCard({ order }: Props) {
  const getStatusText = () => {
    switch (order.status) {
      case 'UPCOMING':
        return 'Upcoming';
      case 'IN_PROGRESS':
        return 'In Progress';
      case 'COMPLETED':
        return 'Completed';
      case 'CANCELLED':
        return 'Cancelled';
    }
  };

  const getStatusIcon = () => {
    switch (order.status) {
      case 'UPCOMING':
        return <HeroIcons.CalendarIcon className="h-auto w-4" />;
      case 'IN_PROGRESS':
        return (
          <HeroIcons.ArrowPathIcon className="h-auto w-4 animate-spin [animation-duration:_2.5s]" />
        );
      case 'COMPLETED':
        return <HeroIcons.CheckCircleIcon className="h-auto w-4" />;
      case 'CANCELLED':
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
              order.status === 'UPCOMING',
            ' bg-status-inprogress/10 text-status-inprogress':
              order.status === 'IN_PROGRESS',
            'bg-status-completed/10 text-status-completed':
              order.status === 'COMPLETED',
            'bg-status-cancelled/10 text-status-cancelled':
              order.status === 'CANCELLED',
          },
        )}
      >
        <span className="flex items-center gap-x-2">
          {getStatusIcon()}
          {getStatusText()}
        </span>
        {['UPCOMING', 'COMPLETED'].includes(order.status) && (
          <>
            {order.scheduleDate && (
              <span className="text-text-primary">
                On {dayjs(order.scheduleDate).format('Do MMM, YY')}
              </span>
            )}
            {order.completionDate && (
              <span className="text-text-primary">
                On {dayjs(order.scheduleDate).format('h:mm a, Do MMM, YY')}
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
            <button>
              <img
                src={order.provider.imageUrl}
                className="aspect-square w-8 rounded-full object-cover"
              />
            </button>
            <span>{order.provider.name}</span>
          </div>
        </div>
        {['IN_PROGRESS', 'UPCOMING'].includes(order.status) && (
          <button className="self-center rounded-lg bg-background-secondary p-2 transition-all hover:brightness-95 active:scale-90">
            <HeroIcons.ChatBubbleLeftIcon className="h-auto w-5" />
          </button>
        )}
      </div>
      {order.status === 'UPCOMING' && (
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
  return (
    <main className="mx-auto mb-12 mt-32 max-w-3xl rounded-xl bg-background-secondary p-6 pt-14">
      <h1 className="mb-14 text-4xl font-bold">Your Orders</h1>
      <section className="space-y-6">
        <OrderCard
          order={{
            title:
              'Kitchen and Bathroom Pest Control Kitchen and Bathroom Pest Control Kitchen and Bathroom Pest Control',
            description: 'Lorem ipsum',
            scheduleDate: new Date(),
            status: 'UPCOMING',
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
        />
      </section>
    </main>
  );
}
