import useUserData from '@/hooks/useUserData';
import { Navigate, Outlet } from 'react-router-dom';
import Loader from './Loader';

export default function OnboardedRoute() {
  const user = useUserData();
  if (user.isLoading) return <Loader className="min-h-screen" />;
  if (user.data) {
    return <Outlet />;
  }
  if (user.isError) return <Navigate to={'/onboarding'} replace />;
}
