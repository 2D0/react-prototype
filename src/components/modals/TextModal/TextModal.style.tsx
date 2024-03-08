import styled from 'styled-components';

//스타일
import Device from 'src/styles/Device.style';
import {
  PlaceCenter,
  SizeMediumRem,
  SizeMiddleRem,
  SizeRegularRem,
  White,
} from 'src/styles/Common.style';

export const TextModalWrap = styled.div`
  ${PlaceCenter};
  height: fit-content;
  min-height: 6.875rem; //110px
  max-height: 15.625rem; //250px
  overflow-y: auto;
  gap: ${SizeRegularRem};

  > svg {
    width: ${SizeMiddleRem};
    height: ${SizeMiddleRem};

    > path {
      fill: ${White};
    }

    @media ${Device.MaxWidthFull} {
      width: ${SizeMediumRem};
      height: ${SizeMediumRem};
    }
  }

  @media ${Device.MaxWidthFull} {
    min-height: 6.25rem; //100px
  }
`;
