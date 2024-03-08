import React from 'react';
import { TypeBoxImage, TypeRelated } from 'interface';

//스타일
import { A11yHidden, IconPlusButton } from 'src/styles/Common.style';
import { BoxImageWrap, BoxImageLink, BoxImageBlock } from './BoxImage.style';

//컴포넌트
import { BlockImage, TextDefault } from 'src/components/atoms';

const BoxImage = ({
  contentData,
}: {
  contentData: TypeBoxImage & Partial<TypeRelated> & { addButton?: boolean };
}) => {
  const { event, imageData, textData, addButton } = contentData || {};
  const { img, errorImg, url } = imageData || {};

  const Component = (
    <>
      <BoxImageBlock>
        {!addButton ? (
          <BlockImage
            blockImageData={{
              img: img,
              errorImg: errorImg,
            }}
          />
        ) : (
          <IconPlusButton>
            <i></i>
            <A11yHidden>등록</A11yHidden>
          </IconPlusButton>
        )}
      </BoxImageBlock>
      {textData && <TextDefault textDefaultData={textData} />}
    </>
  );

  return url ? (
    <BoxImageLink to={url} onClick={() => event?.()}>
      {Component}
    </BoxImageLink>
  ) : (
    <BoxImageWrap onClick={() => event?.()}>{Component}</BoxImageWrap>
  );
};
export default BoxImage;
