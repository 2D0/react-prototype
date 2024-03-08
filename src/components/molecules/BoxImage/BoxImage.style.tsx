import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

//스타일
import {
  ColumnStyle,
  CommonShapeStyle,
  LightGray,
  PlaceCenter,
  SizeTitleRem,
  White,
} from 'src/styles/Common.style';

export const BoxImageContentStyle = css`
  ${ColumnStyle};
  gap: 0.25rem; //4px

  > span {
    text-align: center;
    z-index: 2;
  }
`;
export const BoxImageWrap = styled.div`
  ${BoxImageContentStyle}
`;
export const BoxImageLink = styled(Link)`
  ${BoxImageContentStyle};
`;
export const BoxImageBlock = styled.div`
  ${PlaceCenter};
  gap: 1rem;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  position: relative;
  ${CommonShapeStyle};
  overflow: hidden;
  background-color: ${LightGray};

  > div {
    > i {
      width: ${SizeTitleRem};

      &:before,
      &:after {
        background-color: ${White};
      }
    }
  }
`;
