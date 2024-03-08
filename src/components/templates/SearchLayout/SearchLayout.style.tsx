import styled from 'styled-components';

//스타일
import Device from 'src/styles/Device.style';
import {
  ColumnStyle,
  SizeDefaultRem,
  SizeMediumRem,
  SizeRegularRem,
  SizeXSmallRem,
} from 'src/styles/Common.style';

export const SearchLayoutWrap = styled.form`
  ${ColumnStyle};
  gap: ${SizeMediumRem};
  height: 100%;

  @media ${Device.MaxHeightM} {
    gap: ${SizeRegularRem};
  }
  @media ${Device.MaxWidthFull} {
    gap: ${SizeRegularRem};
  }
`;

export const SearchLayoutContent = styled.div`
  height: 100%;

  > span {
    display: block;
    margin: 0 0 ${SizeXSmallRem} ${SizeDefaultRem};
    position: relative;
    z-index: 2;
  }
`;
