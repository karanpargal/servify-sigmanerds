import axios from 'axios';
import { useEffect, useState } from 'react';
import useWallet from './useWallet';

/**
 * @returns an object containing data, loading, and error for the current user
 */
export default function useUserData() {
  const { address } = useWallet();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8080/api/v1/users/${address}`,
        );
        setData(response.data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (address) {
      fetchData();
    }
  }, [address]);

  return { data, loading, error };
}
