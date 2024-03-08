import { createClient } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';
import { TypeFetchData } from 'interface';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_PROJECT_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY,
);

const fetchData = async ({
  tableName,
  selectValue,
  successHandler,
  errorHandler,
  params,
  valueName,
}: TypeFetchData) => {
  const { name, value } = params || {};

  try {
    const { data } = await supabase
      .from(tableName)
      .select(selectValue ?? '*')
      .eq(name ?? '', value);

    successHandler?.(data);

    return valueName ? (data ?? [])[valueName] : data;
  } catch (error) {
    errorHandler?.(error);
  }
};

export const useFetchData = ({
  tableName,
  selectValue,
  successHandler,
  errorHandler,
  params,
  valueName,
}: TypeFetchData) => {
  const { data, isLoading } = useQuery({
    queryKey: ['getData', tableName],
    queryFn: () =>
      fetchData({
        tableName,
        selectValue,
        successHandler,
        errorHandler,
        params,
        valueName,
      }),
  });

  return { data, isLoading };
};
