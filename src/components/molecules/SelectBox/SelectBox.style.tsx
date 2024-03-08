import styled, { css } from 'styled-components';

//스타일
import {
  Black,
  CenterAlign,
  ColumnStyle,
  CommonShapeButton,
  Gray,
  LightGray,
  PlaceCenter,
  ShadowStyle,
  SizeDefaultSmallRem,
  SizeMediumRem,
  SizeMiddleRem,
  SizeSubTitleRem,
  SizeXSmallRem,
  White,
} from 'src/styles/Common.style';

export const SelectBoxWrap = styled.div`
  width: 100%;
  position: relative;
  ${ColumnStyle};
  gap: 0.25rem; //4px

  > p {
    margin-left: ${SizeXSmallRem};
    position: relative;
    z-index: 2;
  }
  > span {
    position: absolute;
    bottom: -${SizeSubTitleRem};
    left: ${SizeXSmallRem};
  }
`;
export const SelectBoxInner = styled.div<{
  $inputTextData: {
    visible?: boolean;
    valueLength?: number;
  };
}>`
  position: relative;

  > div {
    ${CommonShapeButton};
    position: relative;
    background-color: ${White};
    ${ShadowStyle};
    transition: all 0.3s;

    > div {
      position: absolute;
      top: 0.313rem; //5px
      right: 0;
    }

    > input {
      width: 100%;
      height: ${SizeMediumRem};
      border: 0;
      padding: 0 ${SizeDefaultSmallRem};
      color: ${Black};
      background-color: transparent;
      cursor: pointer;

      &::placeholder {
        color: ${Gray};
      }
    }

    > ul {
      display: grid;
      align-items: center;
      width: 100%;
      height: 0;
      border-radius: 0 0 ${SizeXSmallRem} ${SizeXSmallRem};
      overflow-y: auto;
      position: absolute;
      z-index: 3;
      transition: all 0.3s;
      background-color: ${White};

      &::-webkit-scrollbar {
        width: 0.188rem; //3px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        background-color: ${Gray};
      }

      > li {
        ${CommonShapeButton};
        ${CenterAlign};
        padding: 0 ${SizeDefaultSmallRem};
        cursor: pointer;
        border-radius: 0;
      }
    }

    ${({ $inputTextData }) => {
      const { visible, valueLength } = $inputTextData;

      return (
        visible &&
        css`
          border-radius: ${SizeXSmallRem} ${SizeXSmallRem} 0 0;

          > div {
            top: 0.188rem; //3px

            > i {
              transform: rotate(135deg);
            }
          }
          > input {
            border-bottom: 1px dashed ${LightGray};
          }
          > ul {
            height: calc(
              ${SizeMediumRem} *
                ${valueLength && valueLength < 4 ? valueLength : 4}
            );
          }
        `
      );
    }}
  }
`;
export const SelectBoxRight = styled.div`
  ${CenterAlign};
  justify-content: space-between;
  width: fit-content;

  > span {
    ${PlaceCenter};
    width: ${SizeMiddleRem};
  }

  > button {
    height: inherit;

    > svg {
      width: auto;
      height: 1.25rem; //20px
    }
  }
`;
