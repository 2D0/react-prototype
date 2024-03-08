import React, { useEffect } from 'react';

//상태 관리
import { useSetRecoilState } from 'recoil';
import { headerState } from 'src/state';

//이미지
import { ReactComponent as SvgKakao } from 'src/assets/images/icons/ico-kakao.svg';
import { ReactComponent as SvgEmail } from 'src/assets/images/icons/ico-email.svg';

//스타일
import { Black, GradientBlue, Gray, White } from 'src/styles/Common.style';

//컴포넌트
import { ButtonDefault } from 'src/components/atoms';
import { FormSnsLogin } from 'src/components/templates';

//목업 데이터
const commonButtonData = {
  type: 'button',
  size: '100%',
};
const buttonListTable = [
  {
    ...commonButtonData,
    imageData: { img: SvgKakao },
    textData: { text: '카카오 로그인', color: Black },
    url: sessionStorage.getItem('kakaoToken')
      ? '/'
      : `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`,
    color: '#FEE500',
  },
  {
    ...commonButtonData,
    url: '/signin/email',
    imageData: { img: SvgEmail, color: White },
    textData: { text: '이메일 로그인' },
    color: GradientBlue,
  },
];

const SignInSnsPage = () => {
  const setHeader = useSetRecoilState(headerState);

  useEffect(() => {
    setHeader({
      title: '로그인',
    });

    return () => setHeader({});
  }, []);

  return (
    <FormSnsLogin
      formSnsLoginData={{
        contentType: ButtonDefault,
        blockListTable: buttonListTable,
        lastButtonData: {
          url: '/signup',
          textData: {
            text: '회원가입',
          },
          size: '100%',
          color: Gray,
        },
      }}
    />
  );
};

export default SignInSnsPage;
