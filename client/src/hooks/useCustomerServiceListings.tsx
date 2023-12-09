import axios from 'axios';
import { useEffect, useState } from 'react';
import useUserData from './useUserData';
/**
 * @returns an object containing data, loading, and error for the current user
 */
export default function useCustomerServiceListings() {
  const { data: userData } = useUserData();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8080/api/v1/services/`,
        );
        console.log('data', response.data);
        const d = response.data.filter((item: any) => {
          return item.seller._id !== userData?._id;
        });
        setData(d);
        console.log('data d', d);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (userData?._id) {
      fetchData();
    }
  }, [userData?._id]);

  return { data, loading, error };
}
