import styled from 'styled-components';

//스타일
import Device from 'src/styles/Device.style';
import { ColumnBlockStyle, ColumnListStyle } from 'src/styles/Common.style';

export const ConfirmWrap = styled.div`
  ${ColumnBlockStyle};
  height: 100%;

  @media ${Device.MaxWidthFull} {
    justify-content: space-between;
  }
`;

export const ConfirmContent = styled.div`
  ${ColumnListStyle};

  > span {
    text-align: center;
  }
  > svg {
    height: 6.25rem; //100px
  }
  > div {
    ${ColumnBlockStyle};

    &:first-child {
      height: 6.25rem; //100px

      > img {
        object-fit: contain;
      }
    }
  }
`;
