import styled from 'styled-components';

import {
  White,
  CommonBlockWrapStyle,
  CommonBlockInnerStyle,
  CenterAlign,
  DarkGray,
} from 'src/styles/Common.style';

// ********************** 푸터 **********************
export const FooterWrap = styled.footer`
  ${CommonBlockWrapStyle};
  bottom: 0;
  background: ${DarkGray};
  z-index: 997;
`;
export const FooterInner = styled.div`
  ${CommonBlockInnerStyle};
  ${CenterAlign};

  > a {
    > i {
      height: 26px;

      > svg {
        > path {
          &:first-child {
            fill: ${White};
          }
        }
      }
    }
  }
`;
