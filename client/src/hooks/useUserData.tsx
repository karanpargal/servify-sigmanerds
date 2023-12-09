import { fetchUserData } from '@/utils/apiClients';
import { useQuery } from '@tanstack/react-query';
import useWallet from './useWallet';

/**
 * @returns an object containing data, loading, and error for the current user
 */
export default function useUserData() {
  const { address } = useWallet();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user', address],
    queryFn: () => fetchUserData({ address: address! }),
    enabled: !!address,
  });

  return { data, isLoading, isError };
}
