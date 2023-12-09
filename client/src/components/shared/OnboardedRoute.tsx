import useUserData from '@/hooks/useUserData';
import { Navigate, Outlet } from 'react-router-dom';

export default function OnboardedRoute() {
  const userData = useUserData();
  if (userData) {
    return <Outlet />;
  }
  return <Navigate to={'/onboarding'} replace />;
}
