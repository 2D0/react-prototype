import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Querykeys } from 'src/queries/queryKeys';

const backendHost = process.env.REACT_APP_API_URL;

interface ResponseTypeofFetchOrgById {
  _id: string;
  ciUrl: string;
  orgId: string;
  orgName: string;
  orgTel: string;
  orgAddress: string;
  gisLocation: { lon: number; lat: number; level: number };
}

function getFirstItem<T>(data: T | T[]): T {
  return Array.isArray(data) ? data[0] : data;
}

const fetchOrgById = async ({ _id }: { _id: string }) => {
  const { data } = await axios.get<ResponseTypeofFetchOrgById>(`user_list`, {
    params: { _id },
  });
  return getFirstItem(data);
};

export const useOrgById = (args: { _id: string }) => {
  const { _id } = args;
  const queryKey = [Querykeys.org, _id];
  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () => fetchOrgById({ _id }),
  });

  return {
    data,
    isLoading,
  };
};
