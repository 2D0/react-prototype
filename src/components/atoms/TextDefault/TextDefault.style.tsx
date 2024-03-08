import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { TypeText } from 'interface';

//스타일
import Device from 'src/styles/Device.style';
import { Black, SizeDefaultRem, Transparent } from 'src/styles/Common.style';

export const DefaultTextShape = css<{
  $textDefaultData: TypeText;
}>`
  ${({ $textDefaultData }) => {
    const { family, size, weight, color, background } = $textDefaultData;

    return css`
      font-family: ${family ?? 'Pretendard, sans-serif'} !important;
      font-size: ${size ?? SizeDefaultRem};
      font-weight: ${weight ?? 400};
      color: ${color ?? Black};
      background-color: ${background ?? Transparent};

      @media ${Device.MaxWidthFull} {
        font-size: calc(${size ?? SizeDefaultRem} * 0.9)
    `;
  }};
`;
export const DefaultText = styled.span<{
  $textDefaultData: TypeText | Omit<TypeText, 'text'>;
}>`
  ${DefaultTextShape};
`;
export const DefaultTextLink = styled(Link)<{
  $textDefaultData: TypeText | Omit<TypeText, 'text'>;
}>`
  ${DefaultTextShape};
`;
