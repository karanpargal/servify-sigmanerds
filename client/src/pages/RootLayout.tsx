import { cn } from '@/utils';
import { motion } from 'framer-motion';
import { NavLink, Outlet } from 'react-router-dom';
export default function RootLayout() {
  return (
    <div>
      <header className="border-b border-neutral-200">
        <nav className="mx-auto flex max-w-7xl items-center justify-center">
          <NavLink to="/">
            {({ isActive }) => (
              <motion.div
                className={cn(
                  'relative px-4 py-4',
                  isActive && 'text-accent-primary',
                )}
              >
                Home
                {isActive && (
                  <motion.span
                    layoutId="rootLayoutNavIndicator"
                    className="bg-accent-primary absolute bottom-0 left-0 h-0.5 w-full"
                  />
                )}
              </motion.div>
            )}
          </NavLink>
          <NavLink to="/orders">
            {({ isActive }) => (
              <div
                className={cn(
                  'relative px-4 py-4',
                  isActive && 'text-accent-primary',
                )}
              >
                Order
                {isActive && (
                  <motion.span
                    layoutId="rootLayoutNavIndicator"
                    className="bg-accent-primary absolute bottom-0 left-0 h-0.5 w-full"
                  />
                )}
              </div>
            )}
          </NavLink>
          <NavLink to="/chats">
            {({ isActive }) => (
              <div
                className={cn(
                  'relative px-4 py-4',
                  isActive && 'text-accent-primary',
                )}
              >
                Chats
                {isActive && (
                  <motion.span
                    layoutId="rootLayoutNavIndicator"
                    className="bg-accent-primary absolute bottom-0 left-0 h-0.5 w-full"
                  />
                )}
              </div>
            )}
          </NavLink>
          <NavLink to="/accounts">
            {({ isActive }) => (
              <div
                className={cn(
                  'relative px-4 py-4',
                  isActive && 'text-accent-primary',
                )}
              >
                Accounts
                {isActive && (
                  <motion.span
                    layoutId="rootLayoutNavIndicator"
                    className="bg-accent-primary absolute bottom-0 left-0 h-0.5 w-full"
                  />
                )}
              </div>
            )}
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
