import styled, { css } from 'styled-components';
import { TypeTitle } from 'interface';

//스타일
import Device from 'src/styles/Device.style';
import { Black, SizeSubTitleRem, SizeTitleRem } from 'src/styles/Common.style';

export const TextTitleContent = css<{
  $textDefaultData: TypeTitle;
}>`
  ${({ $textDefaultData }) => {
    const { family, color } = $textDefaultData;

    return css`
      font-family: ${family ?? 'Pretendard, sans-serif'} !important;
      color: ${color ?? Black};
    `;
  }};
`;

export const TextTitleMain = styled.h1<{
  $textDefaultData: TypeTitle;
}>`
  ${TextTitleContent};
  font-size: ${SizeTitleRem};

  @media ${Device.MaxWidthFull} {
    font-size: calc(${SizeTitleRem}* 0.9);
  }
`;
export const TextTitleSub = styled.h2<{
  $textDefaultData: TypeTitle;
}>`
  ${TextTitleContent};
  font-size: ${SizeSubTitleRem};

  @media ${Device.MaxWidthFull} {
    font-size: calc(${SizeSubTitleRem}* 0.9);
  }
`;
