import React from 'react';
import { TypeImage, TypeLink } from 'interface';

//이미지
import noImage from 'src/assets/images/icons/ico-logo-square.svg';

//스타일
import { ImageBoxLink, ImageBoxWrap } from './BlockImage.style';

const BlockImage = ({
  blockImageData,
}: {
  blockImageData: Omit<TypeImage, 'color'> & TypeLink;
}) => {
  if (!blockImageData) return null;

  const { url, img, target, errorImg } = blockImageData || {};

  const imageErrorHandler = event => {
    event.currentTarget.src = errorImg ?? noImage;
  };

  const Component = (
    <img src={img ?? (errorImg || noImage)} onError={imageErrorHandler} />
  );

  return url ? (
    <ImageBoxLink to={url ?? '/'} target={target || '_self'}>
      {Component}
    </ImageBoxLink>
  ) : (
    <ImageBoxWrap>{Component}</ImageBoxWrap>
  );
};
export default BlockImage;
