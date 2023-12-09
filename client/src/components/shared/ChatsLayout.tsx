import { motion } from 'framer-motion';
import { NavLink, useOutlet } from 'react-router-dom';

export default function ChatLayout() {
  const outlet = useOutlet();

  return (
    <main className="grid min-h-[90vh] grid-cols-[auto_1fr] gap-6 p-6">
      <aside className="min-w-[200px] rounded-xl bg-background-secondary py-4">
        <ChatCard
          title="Service Group 1"
          chatId="8c616a9e20ca0867a12a7558c94dc860bce0739493ab30d39e2830c43f644eaf"
        />
        <ChatCard
          title="Service Group 2"
          chatId="20fbe5a0888cf81300c3a6df11e9f3672192427d82b5657077320b4dbbf14be6"
        />
      </aside>
      {outlet && <section className="h-full">{outlet}</section>}
    </main>
  );
}

type ChatCardProps = {
  chatId: string;
  title: string;
};
export function ChatCard({ chatId, title }: ChatCardProps) {
  return (
    <NavLink
      to={`./${chatId}`}
      className="block border-b border-stone-100 last:border-b-0"
    >
      {({ isActive }) => (
        <article className="relative px-4 py-3">
          {title}
          {isActive && (
            <motion.span
              layoutId="chat-navbar-indicator"
              className="absolute right-0 top-0 h-full w-1 rounded-l-lg bg-accent-primary"
            />
          )}
        </article>
      )}
    </NavLink>
  );
}
