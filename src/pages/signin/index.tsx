import React, { useEffect } from 'react';

//커스텀 훅
import { useFormData } from 'src/hooks';

//상태 관리
import { useSetRecoilState } from 'recoil';
import { headerState } from 'src/state';

//스타일
import { GradientBlue } from 'src/styles/Common.style';

//컴포넌트
import { FormLogin } from 'src/components/templates';

const SignInPage = () => {
  const setHeader = useSetRecoilState(headerState);
  const { useFormMethod, emailRegister, defaultRegisterHandler } = useFormData(
    {},
  );

  useEffect(() => {
    setHeader({
      title: '로그인',
      rightButton: false,
    });

    return () => setHeader({});
  }, []);

  //목업 데이터
  const formInfoData = {
    useFormMethod,
    formEvent: {
      navigate: '/user',
      pathName: 'login2',
    },
  };
  const formLayoutTable = [
    {
      name: 'email',
      type: 'text',
      placeholder: '이메일',
      maxLength: 30,
      registerData: emailRegister,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: '비밀번호',
      maxLength: 32,
      registerData: defaultRegisterHandler('비밀번호를'),
      visibleIcon: true,
    },
  ];

  return (
    <FormLogin
      formLayoutData={formInfoData}
      formLayoutTable={formLayoutTable}
      buttonDefaultData={{
        type: 'submit',
        color: GradientBlue,
        textData: { text: '로그인' },
        size: '100%',
      }}
    />
  );
};

export default SignInPage;
