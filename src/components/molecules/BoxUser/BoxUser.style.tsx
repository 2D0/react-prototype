import styled from 'styled-components';

//스타일
import Device from 'src/styles/Device.style';
import {
  ColumnStyle,
  CommonShapeContentBox,
  ShadowStyle,
  SizeDefaultSmallRem,
} from 'src/styles/Common.style';

export const BoxUserWrap = styled.div`
  ${CommonShapeContentBox};
  ${ShadowStyle};
`;
export const BoxUserContent = styled.div`
  display: grid;
  align-items: center;
  gap: ${SizeDefaultSmallRem};
  width: 100%;
  grid-template-columns: 40% 1fr;

  > div {
    height: auto;
    aspect-ratio: 1;
  }
  > ul {
    ${ColumnStyle};
    gap: 0.375rem; //6px

    @media ${Device.MaxWidthFull} {
      gap: 0.25rem; //4px
    }
  }
`;
