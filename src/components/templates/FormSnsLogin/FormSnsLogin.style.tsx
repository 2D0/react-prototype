import styled from 'styled-components';

//스타일
import {
  ColumnListStyle,
  ColumnStyle,
  LightGray,
  SizeXSmallRem,
} from 'src/styles/Common.style';

export const FormSnsLoginWrap = styled.div`
  ${ColumnStyle};
  justify-content: space-between;
  height: 100%;
`;
export const FormSnsLoginButtons = styled.ul`
  ${ColumnListStyle};
  width: 100%;
`;
export const FormSnsLoginBottom = styled.div`
  width: 100%;

  > a {
    display: block;
    margin: 0 auto;
    padding: ${SizeXSmallRem};
  }
`;
