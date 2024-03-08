import React, { useState } from 'react';
import { TypeInput, TypeText } from 'interface';

//스타일
import { DeepBlue, SizeSmallRem } from 'src/styles/Common.style';
import { BoxAgreeWrap, BoxAgreeContent } from './BoxAgree.style';

//컴포넌트
import { ButtonDefault } from 'src/components/atoms';
import { InputCheck, InputRadio } from 'src/components/molecules';

const BoxAgree = ({
  contentData,
}: {
  contentData: TypeInput & { content: TypeText; message: string };
}) => {
  const { name, type, content, message } = contentData;
  const [isContent, setIsContent] = useState(false);

  return (
    <BoxAgreeWrap>
      <BoxAgreeContent $isContent={isContent} value={content?.text} readOnly />
      <ButtonDefault
        buttonDefaultData={{
          textData: {
            text: isContent ? '닫기' : '자세히 보기',
            size: SizeSmallRem,
            weight: 400,
          },
          able: true,
          color: DeepBlue,
          size: 'FIT',
          event: () => setIsContent(prevState => !prevState),
        }}
      />
      {type === 'checkbox' ? (
        <InputCheck
          inputCheckData={{
            name: name,
            textData: { text: message },
          }}
        />
      ) : (
        <InputRadio
          inputRadioData={{
            name: name,
            textData: { text: message },
          }}
        />
      )}
    </BoxAgreeWrap>
  );
};
export default BoxAgree;
