import HeroIcons, { HeroSolidIcons } from '@/components/shared/HeroIcons';
import Button from '@/components/ui/button';
import useCustomerOrderListing from '@/hooks/useCustomerOrderListing';
import useProviderOrderListing from '@/hooks/useProviderOrderListing';
import useUserData from '@/hooks/useUserData';
import { cn } from '@/utils';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { Link } from 'react-router-dom';
import type { OrderClientType } from '../../../server/orders/orders.schema';
dayjs.extend(advancedFormat);

type Props = {
  order: OrderClientType;
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
            {order.completedAt ? (
              <span className="text-text-primary">
                On {dayjs(order.completedAt).format('h:mm a, MMM Do, YY')}
              </span>
            ) : order.serviceDate ? (
              <span className="text-text-primary">
                On {dayjs(order.serviceDate).format('MMM Do, YY')}
              </span>
            ) : null}
          </>
        )}
      </div>
      <div className="flex justify-between p-4">
        <div className="min-w-0 flex-1">
          <h2 className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
            {order.service.name}
          </h2>
          <div className="mt-2 flex items-center gap-x-2 text-sm text-text-secondary">
            <HeroSolidIcons.UserCircleIcon className="h-auto w-6" />
            <span>{order.seller.name}</span>
          </div>
        </div>
        {['In Progress', 'Upcoming'].includes(order.status) && (
          <Link to={`/chats/?walletId=${order.seller.walletAddress}`}>
            <Button variant="outline" size="icon">
              <HeroIcons.ChatBubbleLeftIcon className="h-auto w-5" />
            </Button>
          </Link>
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

function ServiceRequestCard({ order }: Props) {
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
            {order.completedAt ? (
              <span className="text-text-primary">
                On {dayjs(order.completedAt).format('h:mm a, MMM Do, YY')}
              </span>
            ) : order.serviceDate ? (
              <span className="text-text-primary">
                On {dayjs(order.serviceDate).format('MMM Do, YY')}
              </span>
            ) : null}
          </>
        )}
      </div>
      <div className="flex justify-between p-4">
        <div className="min-w-0 flex-1">
          <h2 className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
            {order.service.name}
          </h2>
          <div className="mt-1 text-sm text-text-secondary">
            <strong>Ordered by:</strong> {order.consumer.name}
          </div>
          <div className="mt-1 text-sm text-text-secondary">
            <strong>Address:</strong> {order.address}
          </div>
        </div>
        {['In Progress', 'Upcoming'].includes(order.status) && (
          <Link to={`/chats/?walletId=${order.consumer.walletAddress}`}>
            <Button variant="outline" size="icon">
              <HeroIcons.ChatBubbleLeftIcon className="h-auto w-5" />
            </Button>
          </Link>
        )}
      </div>
      {order.status === 'Upcoming' && (
        <footer className="flex justify-between gap-x-4 px-4 pb-4 text-sm text-background-secondary">
          <Button className="flex max-w-xs flex-1 items-center gap-x-2">
            <HeroIcons.ClockIcon className="h-auto w-4" />
            Reschedule
          </Button>
          <Button
            variant="destructive"
            className="flex max-w-xs flex-1 items-center gap-x-2"
          >
            <HeroIcons.XMarkIcon className="h-auto w-4" />
            Reject
          </Button>
        </footer>
      )}
    </article>
  );
}

export default function Orders() {
  const { data: userData } = useUserData();
  const { data: customerOrders = [] } = useCustomerOrderListing();
  const { data: providerOrders = [] } = useProviderOrderListing();
  return (
    <main className="space-y-8 px-4 pb-12 pt-32">
      {userData?.preference === 'provider' && (
        <section className="mx-auto max-w-3xl rounded-xl bg-background-secondary p-6 pt-0">
          <h1 className="py-14 text-4xl font-bold">Service requests</h1>
          <div className="space-y-6">
            {providerOrders.length ? (
              providerOrders.map((order) => (
                <ServiceRequestCard
                  // @ts-expect-error bad types
                  key={order._id}
                  order={order}
                />
              ))
            ) : (
              <p className="min-h-[64px] text-center">
                No service requests raised yet.
              </p>
            )}
          </div>
        </section>
      )}
      <section className="mx-auto max-w-3xl rounded-xl bg-background-secondary p-6 pt-0">
        <h1 className="py-14 text-4xl font-bold">Your Orders</h1>
        <div className="space-y-6">
          {customerOrders.length ? (
            customerOrders.map((order) => (
              <OrderCard
                // @ts-expect-error bad types
                key={order._id}
                order={order}
              />
            ))
          ) : (
            <p className="min-h-[64px] text-center">No orders found.</p>
          )}
        </div>
      </section>
    </main>
  );
}
