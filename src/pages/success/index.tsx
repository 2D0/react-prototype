import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

//상태 관리
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { headerState, userState } from 'src/state';

//스타일
import { GradientBlue, SizeSubTitleRem } from 'src/styles/Common.style';

//컴포넌트
import { ConfirmLayout } from 'src/components/templates';

const SuccessPage = () => {
  const { listId } = useParams();
  const setHeader = useSetRecoilState(headerState);
  const { image, name, relation, email, phone } = useRecoilValue(userState);

  useEffect(() => {
    setHeader({
      title: listId ? '수정 완료' : '등록 완료',
    });

    return () => setHeader({});
  }, []);

  //목업 데이터
  const userData = {
    userImage: image ?? '',
    userInfo: [
      { title: '이름', content: name ?? '사용자 명' },
      { title: '관계', content: relation ?? '가족 관계도' },
      {
        title: '연락처',
        content: phone ?? '01012345678',
      },
    ],
  };

  return (
    <ConfirmLayout
      confirmLayoutData={{
        imageData: { img: image ?? '' },
        userData: userData,
        textData: {
          text: `${name ?? '사용자'}님 ${
            listId ? '수정' : '등록'
          }이 완료되었습니다.`,
          weight: 600,
          size: SizeSubTitleRem,
        },
        buttonData: {
          size: '100%',
          color: GradientBlue,
          url: '/user',
          textData: { text: '목록으로' },
        },
      }}
    />
  );
};
export default SuccessPage;
