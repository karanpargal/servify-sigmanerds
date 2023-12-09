import { useToast } from '@/components/ui/use-toast';
import useWallet from '@/hooks/useWallet';
import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const { isConnected } = useWallet();
  const { toast } = useToast();

  if (isConnected) {
    return children;
  }

  toast({
    title: 'Wallet not connected!',
    description: 'Redirecting to home page.',
    variant: 'destructive',
  });

  return <Navigate to={'/'} replace />;
}
