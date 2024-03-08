import styled from 'styled-components';

//스타일
import Device from 'src/styles/Device.style';
import {
  ColumnBlock,
  ColumnStyle,
  CommonShapeStyle,
  ContentInnerStyle,
  PositionCenterFixed,
  SizeMaxWidth,
  SizeMediumRem,
  SizeMiddleRem,
  SizeRegularRem,
  White,
} from 'src/styles/Common.style';

export const ModalWrap = styled.div`
  width: 80%;
  max-width: calc(${SizeMaxWidth} - ${SizeMiddleRem});
  height: fit-content;
  max-height: calc(100vh - ${SizeMiddleRem});
  overflow-y: auto;
  text-align: center;
  ${PositionCenterFixed};
  z-index: 1001;
  ${CommonShapeStyle};
  background-color: ${White};
  grid-template-rows: 1fr ${SizeMediumRem};

  @media ${Device.MaxWidthFull} {
    min-height: initial;
    max-height: calc(100vh - ${SizeMediumRem});
  }
`;
export const ModalInner = styled(ColumnBlock)`
  ${ColumnStyle};
  gap: ${SizeRegularRem};

  > div {
    ${ContentInnerStyle};

    &:last-child {
      padding-top: 0;
    }
  }
  > ul {
    width: 100%;

    > li {
      width: 100%;
    }
  }

  @media ${Device.MaxWidthFull} {
    gap: 1.25rem; //20px
  }
`;
