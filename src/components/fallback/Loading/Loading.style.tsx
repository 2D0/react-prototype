import styled from 'styled-components';

//스타일
import {
  GradientBlue,
  Navy,
  PlaceCenter,
  SizeXSmallRem,
} from 'src/styles/Common.style';

export const LoadingWrap = styled.div`
  ${PlaceCenter};
  height: 100%;

  > div {
    ${PlaceCenter};
    gap: ${SizeXSmallRem};

    > i {
      display: block;
      position: relative;
      width: 64px;
      height: 60px;

      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        background: ${GradientBlue};
        width: 64px;
        height: 32px;
        border-radius: 0 0 50px 50px;
        animation: move 0.5s linear infinite alternate;
      }
      &:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        background: ${Navy};
        width: 24px;
        height: 24px;
        transform: translateX(-50%) rotate(0deg);
        animation: rotate 2s linear infinite;
      }
      @keyframes rotate {
        100% {
          transform: translateX(-50%) rotate(360deg);
        }
      }
      @keyframes move {
        0% {
          transform: rotate(10deg);
        }
        100% {
          transform: rotate(-10deg);
        }
      }
    }
  }
`;
