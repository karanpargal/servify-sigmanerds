import { fetchCustomerServiceListing } from '@/utils/apiClients';
import { useQuery } from '@tanstack/react-query';
import useUserData from './useUserData';
/**
 * @returns an object containing data, loading, and error for the current user
 */
export default function useCustomerServiceListings() {
  const user = useUserData();

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['services'],
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    queryFn: () => fetchCustomerServiceListing(),
    enabled: !!user.data?._id,
  });

  const _data = data.filter((service) => {
    // @ts-expect-error _id is not defined on type
    return service.seller._id !== user.data?._id;
  });

  return { data: _data, isLoading, isError };
}
