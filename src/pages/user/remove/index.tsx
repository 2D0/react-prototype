import React, { useEffect } from 'react';

//상태 관리
import { useSetRecoilState } from 'recoil';
import { headerState } from 'src/state';

//이미지
import { ReactComponent as SvgLeave } from 'src/assets/images/icons/ico-leave.svg';

//스타일
import { GradientBlue, SizeSubTitleRem } from 'src/styles/Common.style';

//컴포넌트
import { ConfirmLayout } from 'src/components/templates';

const AccountRemovePage = () => {
  const setHeader = useSetRecoilState(headerState);

  useEffect(() => {
    setHeader({
      title: '탈퇴 완료',
      rightButton: false,
    });

    return () => setHeader({});
  }, []);

  return (
    <ConfirmLayout
      confirmLayoutData={{
        imageData: { svg: SvgLeave },
        textData: {
          text: `회원 탈퇴가 완료되었습니다.`,
          weight: 600,
          size: SizeSubTitleRem,
        },
        buttonData: {
          size: '100%',
          color: GradientBlue,
          url: '/signin',
          textData: { text: '메인으로' },
        },
      }}
    />
  );
};
export default AccountRemovePage;
