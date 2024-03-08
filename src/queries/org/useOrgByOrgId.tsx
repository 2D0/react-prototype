import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Querykeys } from 'src/queries/queryKeys';

const backendHost = process.env.REACT_APP_API_URL;

interface ResponseTypeofFetchOrgByOrgId {
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

const fetchOrgByOrgId = async ({ orgId }: { orgId: string }) => {
  const { data } = await axios.get<ResponseTypeofFetchOrgByOrgId>(`user_list`, {
    params: { orgId },
  });
  return getFirstItem(data);
};

export const useOrgByOrgId = (args: { orgId: string }) => {
  const { orgId } = args;
  const queryKey = [Querykeys.org, orgId];
  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () => fetchOrgByOrgId({ orgId }),
  });

  return {
    data,
    isLoading,
  };
};
