import styled, { css } from 'styled-components';

//스타일
import Device from 'src/styles/Device.style';
import {
  CenterAlign,
  ColumnStyle,
  CommonShapeContentBox,
  CommonShapeStyle,
  LightGray,
  RowList,
  ShadowStyle,
  SizeDefaultSmallRem,
  SizeXSmallRem,
  White,
} from 'src/styles/Common.style';

export const BoxUserInfoWrap = styled.div<{
  $isSelect: boolean;
}>`
  gap: ${SizeDefaultSmallRem};
  width: 100%;
  padding: ${SizeDefaultSmallRem};
  ${CommonShapeStyle};
  position: relative;
  background-color: ${White};

  @media ${Device.MaxWidthFull} {
    padding: ${SizeXSmallRem};
  }
  ${ShadowStyle};

  ${({ $isSelect }) => {
    return $isSelect
      ? css`
          justify-content: space-between;
          height: fit-content;

          > div {
            &:first-child {
              padding-bottom: ${SizeDefaultSmallRem};
            }
            &:nth-child(2) {
              height: fit-content;
              padding-top: ${SizeDefaultSmallRem};
              border-top: 1px dashed ${LightGray};

              @media ${Device.MaxWidthFull} {
                padding-top: ${SizeXSmallRem};
              }
            }
          }
        `
      : css`
          justify-content: center;
        `;
  }};

  @media ${Device.MaxWidthFull} {
    gap: ${SizeXSmallRem};
  }
`;
export const BoxUserInfoTop = styled.div`
  ${CenterAlign};
  justify-content: space-between;
  height: 2.5rem; //40px
  cursor: pointer;

  > span {
    white-space: nowrap;
  }
`;
export const BoxUserInfoContent = styled.div`
  ${CenterAlign};
  justify-content: space-between;
  gap: ${SizeDefaultSmallRem};

  > span {
    white-space: nowrap;
  }

  @media ${Device.MaxWidthFull} {
    gap: ${SizeXSmallRem};
  }
`;
export const BoxUserButtonWrap = styled.div`
  ${ColumnStyle};
  gap: ${SizeDefaultSmallRem};
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: all 0.3s;

  > button,
  a {
    height: 2.125rem; // 34px
    min-height: 2.125rem; // 34px
    border-radius: 0.5rem; //8px
    margin: 0 auto;
  }
  @media ${Device.MaxWidthFull} {
    gap: ${SizeXSmallRem};

    > button,
    a {
      height: 1.625rem; //26px
      min-height: 1.625rem; //26px
      margin: 0 auto;
    }
  }
`;

export const BoxUserInfoText = styled.div`
  ${ColumnStyle};
  align-items: flex-start;
  gap: 0.125rem; //2px

  > span {
    white-space: nowrap;
  }
`;
