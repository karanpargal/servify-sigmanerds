import useUserData from '@/hooks/useUserData';
import { cn } from '@/utils';
import { motion } from 'framer-motion';
import { NavLink, Outlet } from 'react-router-dom';
import CreateServiceListingForm from '../Forms/CreateServiceListingForm';
import Button from '../ui/button';
import Dialog from '../ui/dialog';
import HeroIcons from './HeroIcons';
export default function RootLayout() {
  const { data: userData } = useUserData();

  return (
    <div>
      <header className="relative border-b border-stone-200 bg-background-secondary">
        <nav className="mx-auto flex max-w-7xl items-center justify-center">
          <NavLink to="/dashboard">
            {({ isActive }) => (
              <motion.div
                className={cn(
                  'relative flex items-center gap-x-2 px-4 py-4',
                  isActive && 'text-accent-primary',
                )}
              >
                <HeroIcons.HomeIcon className="h-auto w-5" />
                <span className="max-lg:hidden">Dashboard</span>
                {isActive && (
                  <motion.span
                    layoutId="rootLayoutNavIndicator"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-accent-primary"
                  />
                )}
              </motion.div>
            )}
          </NavLink>
          <NavLink to="/orders">
            {({ isActive }) => (
              <div
                className={cn(
                  'relative flex items-center gap-x-2 px-4 py-4',
                  isActive && 'text-accent-primary',
                )}
              >
                <HeroIcons.WrenchScrewdriverIcon className="h-auto w-5" />
                <span className="max-lg:hidden">Orders</span>
                {isActive && (
                  <motion.span
                    layoutId="rootLayoutNavIndicator"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-accent-primary"
                  />
                )}
              </div>
            )}
          </NavLink>
          <NavLink to="/chats">
            {({ isActive }) => (
              <div
                className={cn(
                  'relative flex items-center gap-x-2 px-4 py-4',
                  isActive && 'text-accent-primary',
                )}
              >
                <HeroIcons.ChatBubbleBottomCenterTextIcon className="h-auto w-5" />
                <span className="max-lg:hidden">Chats</span>
                {isActive && (
                  <motion.span
                    layoutId="rootLayoutNavIndicator"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-accent-primary"
                  />
                )}
              </div>
            )}
          </NavLink>
          <NavLink to="/account">
            {({ isActive }) => (
              <div
                className={cn(
                  'relative flex items-center gap-x-2 px-4 py-4',
                  isActive && 'text-accent-primary',
                )}
              >
                <HeroIcons.UserIcon className="h-auto w-5" />
                <span className="max-lg:hidden">Account</span>
                {isActive && (
                  <motion.span
                    layoutId="rootLayoutNavIndicator"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-accent-primary"
                  />
                )}
              </div>
            )}
          </NavLink>
        </nav>
        {userData?.preference === 'provider' && (
          <Dialog>
            <Dialog.Trigger asChild>
              <Button className="absolute right-6 z-10 max-lg:fixed max-lg:bottom-8 max-lg:right-8 max-lg:h-auto max-lg:rounded-full max-lg:p-4  max-lg:shadow-card lg:top-1/2 lg:-translate-y-1/2">
                <span className="max-lg:hidden">Create service listing</span>
                <HeroIcons.PlusIcon className="h-auto w-5 lg:hidden" />
              </Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Header className="mb-3">
                <Dialog.Title>Create service listing</Dialog.Title>
              </Dialog.Header>
              <CreateServiceListingForm />
            </Dialog.Content>
          </Dialog>
        )}
      </header>

      <Outlet />
    </div>
  );
}
