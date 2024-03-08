import { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { TypeAxios, TypeAxiosData } from 'interface';

//상태 관리
import { useRecoilValue } from 'recoil';
import { apiUrlState } from 'src/state';

const useGetData = ({ pathName, valueName, axiosUrl }: TypeAxiosData) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [getData, setUseData] = useState<any>([]);
  const apiUrl = useRecoilValue(apiUrlState);

  const getDataHandler = useCallback(
    async ({ successHandler, errorHandler, paramsValue }: TypeAxios) => {
      setIsLoading(true);
      await axios({
        url: `${axiosUrl ?? apiUrl}/${pathName}`,
        method: 'GET',
        params: paramsValue,
      })
        .then(resolve => {
          setUseData(valueName ? resolve?.data[valueName] : resolve?.data);
          successHandler?.(resolve);
        })
        .catch(error => {
          errorHandler?.(error);
        });
      setIsLoading(false);
    },
    [axiosUrl, apiUrl, pathName, valueName],
  );

  const getDataDetailHandler = async ({
    handlePathName,
    successHandler,
    errorHandler,
    paramsValue,
  }: TypeAxios) => {
    await axios({
      url: `${axiosUrl ?? apiUrl}/${handlePathName}`,
      method: 'GET',
      params: paramsValue,
    })
      .then(resolve => {
        successHandler?.(resolve);
      })
      .catch(error => {
        errorHandler?.(error);
      });
  };

  const getDataMemo = useMemo(() => {
    return getData;
  }, [getData]);

  useEffect(() => {
    setUseData(getDataMemo);
  }, [getDataMemo]);

  useEffect(() => {
    pathName &&
      getDataHandler({
        successHandler: undefined,
        errorHandler: undefined,
      });
  }, []);

  return {
    getData,
    getDataHandler,
    getDataDetailHandler,
    getDataMemo,
    isLoading,
  };
};
export default useGetData;
