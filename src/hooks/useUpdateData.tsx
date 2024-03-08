import { useNavigate } from 'react-router';
import axios from 'axios';
import { TypeAxios, TypeAxiosUpdate } from 'interface';

//상태 관리
import { useRecoilValue } from 'recoil';
import { apiUrlState } from 'src/state';

const useUpdateData = ({ methodName, pathName, axiosUrl }: TypeAxiosUpdate) => {
  const navigate = useNavigate();
  const apiUrl = useRecoilValue(apiUrlState);

  const updateDataHandler = async ({
    handlePathName,
    dataValue,
    navigateValue,
    successHandler,
    errorHandler,
    paramsValue,
    headersValue,
  }: TypeAxios) => {
    await axios({
      url: `${axiosUrl ?? apiUrl}/${handlePathName ?? pathName}`,
      method: methodName,
      data: dataValue,
      params: paramsValue,
      headers: headersValue,
    })
      .then(resolve => {
        navigateValue && navigate(navigateValue);
        successHandler?.(resolve);
      })
      .catch(error => {
        errorHandler?.(error);
      });
  };

  return updateDataHandler;
};
export default useUpdateData;
