import styled from 'styled-components';

//스타일
import Device from 'src/styles/Device.style';
import {
  CommonShapeStyle,
  ShadowStyle,
  SizeRegularRem,
  SizeXSmallRem,
} from 'src/styles/Common.style';

export const InfoLayoutWrap = styled.div`
  display: grid;
  grid-template-rows: calc(100% - 40px - ${SizeRegularRem}) 40px;
  gap: ${SizeRegularRem};
  height: 100%;
`;
export const InfoLayoutImageList = styled.div`
  height: 100%;
  overflow-y: auto;

  > ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${SizeRegularRem};

    > li {
      height: fit-content;
      padding: ${SizeXSmallRem};
      ${CommonShapeStyle};
      ${ShadowStyle};
      background-color: #fff;

      &:first-child {
        grid-column: span 2;

        > a,
        > div {
          > span {
            display: none;
          }
        }
      }
    }

    @media ${Device.MaxWidthFull} {
      gap: ${SizeXSmallRem};
    }
  }
`;
