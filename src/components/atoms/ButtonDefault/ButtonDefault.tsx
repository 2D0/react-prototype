import React from 'react';
import { TypeButton } from 'interface';

//스타일
import { ButtonWrap, ButtonLink } from './ButtonDefault.style';

//컴포넌트
import { TextDefault } from 'src/components/atoms';

const ButtonDefault = ({
  buttonDefaultData,
  contentData,
}: {
  buttonDefaultData?: TypeButton;
  contentData?: TypeButton;
}) => {
  const finalData = Object.assign({}, buttonDefaultData, contentData);
  const { url, able, type, event, textData, imageData, target } = finalData;

  const Component = (
    <>
      {imageData && (
        <i>
          <imageData.img />
        </i>
      )}
      {textData && <TextDefault textDefaultData={textData} />}
    </>
  );

  return url ? (
    <ButtonLink
      to={url}
      target={target || '_self'}
      onClick={() => (able ?? true) && event?.()}
      $buttonDefaultData={{ ...finalData, weight: textData?.weight }}
    >
      {Component}
    </ButtonLink>
  ) : (
    <ButtonWrap
      type={type || 'button'}
      disabled={!(able ?? true)}
      onClick={() => (able ?? true) && event?.()}
      $buttonDefaultData={{ ...finalData, weight: textData?.weight }}
    >
      {Component}
    </ButtonWrap>
  );
};
export default ButtonDefault;
