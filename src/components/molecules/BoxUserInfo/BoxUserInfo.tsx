import React, { useEffect, useState } from 'react';
import { TypeFace } from 'interface';

//스타일
import { GradientBlue } from 'src/styles/Common.style';
import {
  BoxUserInfoWrap,
  BoxUserInfoText,
  BoxUserInfoTop,
  BoxUserButtonWrap,
} from './BoxUserInfo.style';

//컴포넌트
import { ButtonDefault, TextDefault } from 'src/components/atoms';

const BoxUserInfo = ({ contentData }: { contentData: TypeFace }) => {
  const [isSelect, setIsSelect] = useState<boolean>(false);
  const {
    event,
    selectIndex,
    setSelectIndex,
    index,
    orgAddress,
    orgName,
    orgId,
    orgTel,
  } = contentData;

  useEffect(() => {
    setIsSelect(selectIndex === index ? !isSelect : false);
  }, [selectIndex]);

  return (
    <BoxUserInfoWrap $isSelect={isSelect}>
      <BoxUserInfoTop
        onClick={() => setSelectIndex(isSelect ? undefined : index)}
      >
        <TextDefault
          textDefaultData={{
            text: orgName || '이름',
            weight: 500,
          }}
        />
        <TextDefault
          textDefaultData={{
            text: `${isSelect ? '닫기' : '더 보기'}`,
          }}
        />
      </BoxUserInfoTop>
      <BoxUserButtonWrap>
        <BoxUserInfoText>
          <TextDefault
            textDefaultData={{
              text: `주소:${orgAddress || ''}`,
            }}
          />
          <TextDefault
            textDefaultData={{
              text: `연락처:${orgTel || ''}`,
            }}
          />
        </BoxUserInfoText>
        <ButtonDefault
          buttonDefaultData={{
            textData: { text: '선택' },
            color: GradientBlue,
            event: () => event?.(orgId),
          }}
        />
      </BoxUserButtonWrap>
    </BoxUserInfoWrap>
  );
};
export default BoxUserInfo;
