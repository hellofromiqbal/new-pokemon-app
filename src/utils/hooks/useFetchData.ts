import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchData = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

const useFetchData = (queryKey: string, url: string) => {
  return useQuery({
    queryKey: [queryKey, url],
    queryFn: () => fetchData(url),
    enabled: !!url,
  });
};

export default useFetchData;
