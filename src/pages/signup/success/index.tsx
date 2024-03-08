import React from 'react';

//상태 관리
import { useRecoilValue } from 'recoil';
import { userState } from 'src/state';

//스타일
import { GradientBlue, SizeSubTitleRem } from 'src/styles/Common.style';

//컴포넌트
import { ConfirmLayout } from 'src/components/templates';

const SignupSuccessPage = () => {
  const { name, relation, email, phone } = useRecoilValue(userState);

  //목업 데이터
  const userData = {
    userImage: '',
    userInfo: [
      { title: '이름', content: name ?? '사용자 명' },
      { title: '관계', content: relation ?? '가족 관계도' },
      { title: '이메일', content: email ?? '이메일 주소' },
      {
        title: '연락처',
        content: phone ?? '01012345678',
      },
    ],
  };

  return (
    <ConfirmLayout
      confirmLayoutData={{
        imageData: { img: '' },
        userData: userData,
        textData: {
          text: `${name ?? '사용자'}님 회원가입이 완료되었습니다.`,
          weight: 600,
          size: SizeSubTitleRem,
        },
        buttonData: {
          size: '100%',
          color: GradientBlue,
          url: '/',
          textData: { text: '로그인 하기' },
        },
      }}
    />
  );
};
export default SignupSuccessPage;
