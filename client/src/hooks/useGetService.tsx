import { fetchServiceById } from '@/utils/apiClients';
import { useQuery } from '@tanstack/react-query';
import useUserData from './useUserData';
/**
 * @returns an object containing data, loading, and error for the current user
 */
export default function useGetService({ id }: { id: string }) {
  const user = useUserData();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['services', id],
    queryFn: () => fetchServiceById({ id }),
    enabled: !!user.data?._id,
  });

  return { data, isLoading, isError };
}
