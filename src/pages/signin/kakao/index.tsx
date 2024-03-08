import { useEffect } from 'react';

//커스텀 훅
import { useGetData } from 'src/hooks';

//상태 관리
import { useRecoilState } from 'recoil';
import { loginState } from 'src/state';

const KakaoCallback = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const { getDataDetailHandler } = useGetData({
    axiosUrl: `${process.env.REACT_APP_URL_TOKEN}:${process.env.REACT_APP_API_PORT2}`,
  });

  useEffect(() => {
    getDataDetailHandler({
      handlePathName: `api/kakaoSocialToken`,
      paramsValue: {
        code: new URL(window.location.href).searchParams.get('code'),
      },
      successHandler: resolve => {
        //id_token 은 값이 바뀌지 않음
        setIsLogin(resolve.data.id_token);
      },
      errorHandler: error => {
        console.log(error);
      },
    });
  }, []);

  return null;
};
export default KakaoCallback;
