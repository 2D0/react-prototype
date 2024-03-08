import styled from 'styled-components';

//스타일
import {
  PositionCenter,
  White,
  PositionCenterCol,
  SizeXSmallRem,
  Green,
  CommonBlockInnerStyle,
  CommonBlockWrapStyle,
} from 'src/styles/Common.style';

export const HeaderWrap = styled.header`
  ${CommonBlockWrapStyle};
  z-index: 998;
  top: 0;
  background-color: ${White};
`;

export const HeaderInner = styled.div`
  ${CommonBlockInnerStyle};

  > button {
    ${PositionCenterCol};
    left: 0;
  }
  > h2,
  svg {
    ${PositionCenter}
  }
  > svg {
    cursor: pointer;
  }
  > a {
    ${PositionCenterCol};
    right: 0;
  }
`;

export const HeaderCenter = styled.div`
  svg {
    ${PositionCenter}
  }
`;
export const HeaderLeft = styled.div`
  ${PositionCenterCol};
  left: 0;
`;
export const HeaderRight = styled.div`
  ${PositionCenterCol};
  right: 0;

  > i {
    display: block;
    width: 0.5rem; //8px
    height: 0.5rem; //8px
    border-radius: 50%;
    ${PositionCenterCol};
    left: -${SizeXSmallRem};
    background: ${Green};
  }
`;
