import styled from 'styled-components';

//스타일
import Device from 'src/styles/Device.style';
import {
  ColumnBlockStyle,
  ColumnList,
  ColumnStyle,
  SizeMediumRem,
  SizeMiddleLargeRem,
} from 'src/styles/Common.style';

export const FormLayoutWrap = styled.form`
  ${ColumnStyle};
  gap: ${SizeMiddleLargeRem};
  height: 100%;

  @media ${Device.MaxHeightM} {
    ${ColumnBlockStyle};
  }
  @media ${Device.MaxWidthFull} {
    justify-content: space-between;
    gap: ${SizeMediumRem};
  }
`;

export const FormLayoutButtons = styled(ColumnList).attrs({ as: 'div' })`
  justify-content: center;
  align-items: center;
`;
export const FormLayoutContent = styled.fieldset<{ $nameAble?: boolean }>`
  ${ColumnBlockStyle};

  > ul {
    ${ColumnBlockStyle}
  }
  > button {
    margin: 0 0 0 auto;
  }
`;
