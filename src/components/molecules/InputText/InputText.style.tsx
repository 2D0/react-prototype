import styled, { css } from 'styled-components';
import { TypeButton } from 'interface';

//스타일
import {
  Black,
  CenterAlign,
  ColumnStyle,
  CommonShapeButton,
  Gray,
  PlaceCenter,
  ShadowStyle,
  SizeDefaultSmallRem,
  SizeMediumRem,
  SizeMiddleRem,
  SizeSubTitleRem,
  SizeXSmallRem,
  White,
} from 'src/styles/Common.style';

export const InputTextWrap = styled.div`
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
    z-index: 2;
  }
`;
export const InputTextBox = styled.div<{
  $inputTextData: {
    visibleIcon?: boolean;
    buttonData?: Pick<TypeButton, 'size'> & {
      timer?: number | boolean | undefined;
    };
    errors?: boolean;
  };
}>`
  position: relative;

  > div {
    ${CommonShapeButton};
    overflow: hidden;
    display: grid;
    align-items: center;
    position: relative;
    background-color: ${White};
    ${ShadowStyle};

    ${({ $inputTextData }) => {
      const { visibleIcon, buttonData } = $inputTextData;
      const gridSize = visibleIcon || buttonData?.size;

      return (
        gridSize &&
        css`
          grid-template-columns: 1fr ${visibleIcon
              ? '2.188rem'
              : `calc(${buttonData?.size}${
                  buttonData?.timer ? ` + ${SizeMiddleRem}` : ''
                })` ?? SizeMediumRem};
        `
      );
    }}

    > input {
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0 ${SizeDefaultSmallRem};
      color: ${Black};
      background-color: transparent;

      &::placeholder {
        color: ${Gray};
      }
    }
  }
`;
export const InputTextRight = styled.div`
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
