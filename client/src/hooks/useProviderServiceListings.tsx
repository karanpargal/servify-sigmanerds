import { fetchProviderServiceListing } from '@/utils/apiClients';
import { useQuery } from '@tanstack/react-query';
import useUserData from './useUserData';
/**
 * @returns an object containing data, loading, and error for the current user
 */
export default function useProviderServiceListings() {
  const user = useUserData();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['services', user.data?._id],

    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    queryFn: () => fetchProviderServiceListing({ uid: user.data?._id! }),
    enabled: !!user.data?._id,
  });

  return { data, isLoading, isError };
}
