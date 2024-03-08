import React from 'react';
import { useEventUserByOrgIdAndEmail } from 'src/queries/eventUser/useEventUserByOrgIdAndEmail';

//상태 관리
import { useAuth } from 'src/contexts/AuthContext';

//이미지
import noFace from 'src/assets/images/icons/ico-noimg.svg';

//스타일
import { GradientBlue } from 'src/styles/Common.style';

//컴포넌트
import { InfoLayout } from 'src/components/templates';

const UserDetailPage = () => {
  const { user } = useAuth<'required'>();
  const orgId = 'blue';
  const { data, isLoading } = useEventUserByOrgIdAndEmail({
    orgId: user?.user_metadata?.orgId || orgId,
    email: user?.email || '',
  });

  const dataTable =
    data?.relatedFaces?.length !== 0
      ? (data?.relatedFaces || []).map((item, index) => ({
          ...item,
          index: index,
          textData: { text: item?.relation, weight: 500 },
          imageData: {
            img: `${process.env.REACT_APP_API_URL}/lunaApi/6/samples/${item?.sampleId}`,
            errorImg: noFace,
            url: `/user/form/${item?.vipId}`,
          },
        }))
      : [
          {
            title: '대상자를 등록해 주세요.',
            imageData: { img: noFace },
          },
        ];

  if (isLoading) {
    return <div />;
  }
  return (
    <InfoLayout
      infoLayoutData={{
        imageTable: dataTable,
        buttonDefaultData: {
          url: '/user/form',
          textData: {
            text: `${
              data?.relatedFaces?.length === 0 ? '대상자' : '보호자'
            } 등록`,
          },
          color: GradientBlue,
        },
      }}
    />
  );
};

export default UserDetailPage;
