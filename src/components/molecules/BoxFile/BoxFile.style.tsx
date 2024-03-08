import styled, { css } from 'styled-components';

//스타일
import {
  A11yHiddenStyle,
  CommonShapeStyle,
  IconButtonStyle,
  IconClose,
  IconPlus,
  LightGray,
  PlaceCenter,
  PositionCenter,
  ShadowStyle,
  SizeFullStyle,
  SizeMiddleRem,
  SizeRegularRem,
} from 'src/styles/Common.style';

export const BoxFileWrap = styled.div`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  ${CommonShapeStyle};
  overflow: hidden;
  ${ShadowStyle};
`;
export const BoxFileContentStyle = css`
  ${SizeFullStyle};
  ${PlaceCenter};
  gap: 1rem;
  background-color: ${LightGray};
  position: relative;
`;
export const BoxFileContent = styled.div`
  ${BoxFileContentStyle};
  cursor: unset;

  > button {
    ${PlaceCenter};
    ${IconButtonStyle};
    ${IconClose};
    position: absolute;
    top: 2%;
    right: 2%;
    z-index: 1;
  }
`;
export const BoxFileAdd = styled.label`
  ${BoxFileContentStyle};
  position: relative;
  cursor: pointer;

  > div {
    ${PositionCenter};
    z-index: 1;
    ${IconPlus};

    > i {
      width: ${SizeRegularRem};
    }
  }
  > span {
    ${PlaceCenter};
    height: ${SizeMiddleRem};
    ${PositionCenter};
    z-index: 10;
  }
  > input {
    ${A11yHiddenStyle}
  }
`;
