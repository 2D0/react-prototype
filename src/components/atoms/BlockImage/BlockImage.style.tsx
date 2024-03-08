import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

//스타일
import {
  SizeFullStyle,
  PositionCenter,
  PhotoCover,
  CommonShapeStyle,
} from 'src/styles/Common.style';

export const ImageBoxShape = css`
  display: block;
  ${SizeFullStyle};
  overflow: hidden;
  position: relative;
  ${CommonShapeStyle};

  > img {
    ${PositionCenter};
    ${PhotoCover};
  }
`;
export const ImageBoxLink = styled(Link)`
  display: block;
  ${ImageBoxShape}
`;
export const ImageBoxWrap = styled.div`
  ${ImageBoxShape}
`;
