import { fetchCustomerOrderListing } from '@/utils/apiClients';
import { useQuery } from '@tanstack/react-query';
import useUserData from './useUserData';
/**
 * @returns an object containing data, loading, and error for the current user
 */
export default function useCustomerOrderListing() {
  const user = useUserData();
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['services', user.data?._id],

    // @ts-expect-error bad types
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    queryFn: () => fetchCustomerOrderListing({ uid: user.data?._id! }),
    enabled: !!user.data?._id,
  });

  return { data, isLoading, isError };
}
