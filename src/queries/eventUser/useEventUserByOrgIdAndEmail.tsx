import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Querykeys } from 'src/queries/queryKeys';

const backendHost = process.env.REACT_APP_API_URL;

interface ResponseTypeofFetchEventUserByOrgId {
  email: string;
  orgId: string;
  relatedFaces?: Array<{
    groupName: string;
    name: string;
    phone: string;
    relation: string;
    relationId: number;
    sampleId: string;
    vipId: string;
  }>;
}

function getFirstItem<T>(data: T | T[]): T {
  return Array.isArray(data) ? data[0] : data;
}

const fetchEventUserByOrgIdAndEmail = async ({
  orgId,
  email,
}: {
  orgId: string;
  email: string;
}) => {
  const { data } = await axios.get<ResponseTypeofFetchEventUserByOrgId>(
    `user_list`,
    { params: { orgId, email } },
  );
  return getFirstItem(data);
};

export const useEventUserByOrgIdAndEmail = (args: {
  orgId: string;
  email: string;
}) => {
  const { orgId, email } = args;
  const queryKey = [Querykeys.eventUser, orgId, email];
  const { data, isLoading } = useQuery({
    queryKey,
    queryFn: () => fetchEventUserByOrgIdAndEmail({ orgId, email }),
  });

  return {
    data,
    isLoading,
  };
};
