import TimelineCard from '@/components/TimelineCard';

import FrequentOrdersCard from '@/components/FrequentOrdersCard';
import RecommendedServiceCard from '@/components/RecommendedServiceCard';

export default function Dashboard() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] gap-6 p-6">
        {/* Left col */}
        <div className="space-y-6">
          <section className="rounded-xl bg-background-secondary p-4 shadow-card">
            <RecommendedServiceCard />
            <RecommendedServiceCard />
            <RecommendedServiceCard />
          </section>
          <section className="rounded-xl bg-background-secondary p-4 shadow-card">
            <h1>Frequently Ordered Services</h1>
            <FrequentOrdersCard />
            <FrequentOrdersCard />
            <FrequentOrdersCard />
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
