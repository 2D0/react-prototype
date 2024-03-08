import styled, { css } from 'styled-components';

//스타일
import {
  ColumnStyle,
  CommonShapeContentBox,
  SizeExtraRem,
  SizeMiddleRem,
  SizeXSmallRem,
  White,
} from 'src/styles/Common.style';

export const BoxAgreeWrap = styled.div`
  ${ColumnStyle};
  gap: ${SizeXSmallRem};
  ${CommonShapeContentBox};
  border: 1px solid ${White};

  > button {
    margin: 0 0 0 auto;
  }
`;
export const BoxAgreeContent = styled.textarea<{ $isContent: boolean }>`
  width: 100%;
  border-radius: 0.25rem;
  border-width: 0;
  padding: ${SizeXSmallRem};

  ${({ $isContent }) =>
    $isContent
      ? css`
          height: ${SizeExtraRem};
        `
      : css`
          height: ${SizeMiddleRem};
          overflow: hidden;
        `}
`;
