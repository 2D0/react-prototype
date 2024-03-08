import styled from 'styled-components';
import { Link } from 'react-router-dom';

//스타일
import Device from 'src/styles/Device.style';
import {
  ColumnListStyle,
  CommonShapeContentBox,
  ShadowStyle,
  SizeDefaultSmallRem,
  SizeXSmallRem,
} from 'src/styles/Common.style';

export const BoxGroupWrap = styled(Link)`
  display: grid;
  align-items: center;
  grid-template-columns: 23% 1fr;
  gap: ${SizeDefaultSmallRem};
  ${CommonShapeContentBox};
  ${ShadowStyle};

  > div {
    > img {
      height: auto;
    }
  }
  > ul {
    ${ColumnListStyle};

    @media ${Device.MaxWidthFull} {
      gap: ${SizeXSmallRem};
    }
  }
`;
