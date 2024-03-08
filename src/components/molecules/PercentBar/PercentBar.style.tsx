import styled from 'styled-components';

//스타일
import {
  White,
  DeepBlue,
  PositionFit,
  SizeSmallRem,
} from 'src/styles/Common.style';

// ********************* 퍼센트 바 ********************
export const PercentBarWrap = styled.div`
  width: 100%;

  > span {
    display: block;
    width: fit-content;
    margin: 0.5rem 0 0 auto; //8px
  }
`;
export const PercentBarFill = styled.div<{ $percentBarData: number }>`
  overflow: hidden;
  position: relative;
  background-color: ${White};
  height: 0.25rem; //4px
  border-radius: ${SizeSmallRem};

  > div {
    ${PositionFit};
    width: ${({ $percentBarData }) => $percentBarData}%;
    height: 100%;
    transition: all 1s ease;
    background-color: ${DeepBlue};
  }
`;
