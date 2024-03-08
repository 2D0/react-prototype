import styled from 'styled-components';
import { TypeDefault } from 'interface';

//스타일
import {
  A11yHiddenStyle,
  Blue,
  Flex,
  LightGray,
  SizeXSmallRem,
  White,
} from 'src/styles/Common.style';

export const InputRadioWrap = styled.div<{
  $inputRadioData: {
    able: Pick<TypeDefault, 'able'>;
  };
}>`
  > input[type='radio'] {
    ${A11yHiddenStyle}

    &:checked {
      + label {
        > i {
          &:before {
            background-color: ${Blue};
          }
        }
      }
    }
  }
`;
export const InputRadioLabel = styled.label`
  ${Flex};
  align-items: center;
  gap: 0.375rem;
  width: fit-content;
  margin: 0 auto;
  cursor: pointer;

  > i {
    display: grid;
    place-items: center;
    width: 1.25rem; //20px
    height: 1.25rem; //20px
    border: 1px solid ${LightGray};
    border-radius: 1.25rem; //20px
    background-color: ${White};

    &:before {
      display: block;
      content: '';
      width: ${SizeXSmallRem};
      height: ${SizeXSmallRem};
      border-radius: ${SizeXSmallRem};
      background-color: ${Blue};
    }
  }
  > span {
    display: block;
  }
`;
