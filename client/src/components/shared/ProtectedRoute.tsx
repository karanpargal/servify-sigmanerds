import { useToast } from '@/components/ui/use-toast';
import useWallet from '@/hooks/useWallet';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const { isConnected } = useWallet();
  const { toast } = useToast();

  useEffect(() => {
    if (isConnected) return;
    toast({
      title: 'Wallet not connected!',
      description: 'Redirecting to home page.',
      variant: 'destructive',
    });
  }, [isConnected]);

  if (isConnected) {
    return children;
  }

  return <Navigate to={'/'} replace />;
}
