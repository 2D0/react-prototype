import styled from 'styled-components';
import { TypeDefault } from 'interface';

//스타일
import {
  A11yHiddenStyle,
  Blue,
  Flex,
  LightGray,
  White,
} from 'src/styles/Common.style';

export const InputCheckWrap = styled.div<{
  $inputCheckData: { able: Pick<TypeDefault, 'able'> };
}>`
  > input[type='checkbox'] {
    ${A11yHiddenStyle}

    &:checked {
      + label {
        > i {
          background-color: ${Blue};
          border: 0;
        }
      }
    }
  }
`;
export const InputCheckLabel = styled.label`
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
    border-radius: 0.313rem; //5px
    background-color: ${White};

    &:before {
      display: block;
      content: '';
      width: 0.5rem; //8px
      height: 0.25rem; //4px
      border-right: 0.125rem solid ${White}; //2px
      border-top: 0.125rem solid ${White}; //2px
      transform: rotate(135deg);
    }
  }

  > span {
    display: block;
  }
`;
