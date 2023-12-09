import { fetchUserData } from '@/utils/apiClients';
import { useQuery } from '@tanstack/react-query';
import useWallet from './useWallet';

/**
 * @returns an object containing data, loading, and error for the current user
 */
export default function useUserData({ address }: { address?: string } = {}) {
  const { address: _address } = useWallet();

  const add = address || _address;

  const { data, isLoading, isError } = useQuery({
    queryKey: ['user', add],
    queryFn: () => fetchUserData({ address: add! }),
    enabled: !!add,
  });

  return { data, isLoading, isError };
}
