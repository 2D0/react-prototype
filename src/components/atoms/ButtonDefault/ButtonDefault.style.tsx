import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { TypeButton, TypeDefault } from 'interface';

//스타일
import Device from 'src/styles/Device.style';
import {
  Center,
  CommonShapeButton,
  GradientBlue,
  IconButtonStyle,
  LightGray,
  PlaceCenter,
  PositionCenterCol,
  SizeExtraRem,
  SizeXSmallRem,
  White,
} from 'src/styles/Common.style';

export const ButtonWrapStyle = css<{
  $buttonDefaultData: Partial<TypeButton> & {
    weight: Pick<TypeDefault, 'weight'>;
  };
}>`
  ${Center};
  text-align: center;
  position: relative;

  ${({ $buttonDefaultData }) => {
    const { color, size, imageData, textData, able, weight } =
      $buttonDefaultData;
    const defaultShape = css`
      background: ${color ?? (able ? GradientBlue : LightGray) ?? GradientBlue};

      > span {
        font-weight: ${weight ?? 500};
        color: ${textData?.color ?? White};
      }
    `;
    const imageWithText = css`
      > i {
        ${PositionCenterCol};
        left: ${SizeXSmallRem};
      }
    `;
    const defaultSize = css`
      ${CommonShapeButton};
      width: ${size ?? SizeExtraRem};

      @media ${Device.MaxWidthFull} {
        width: ${size ?? '100%'};
      }
    `;
    const fitSize = css`
      width: fit-content;
      height: fit-content;
      min-height: fit-content;
      padding: 0.125rem 0.5rem; //2px 8px
      border-radius: 0.25rem;
    `;
    const imageButtonShape =
      imageData &&
      !size &&
      css`
        ${IconButtonStyle};
        position: relative;

        > i {
          ${PlaceCenter};
          width: 100%;
          height: 100%;
        }
      `;
    const imageColor =
      imageData &&
      css`
        > i {
          > svg {
            > path {
              ${imageData?.color && `fill: ${imageData?.color}`}
            }
          }
        }
      `;

    return [
      size === 'FIT' ? fitSize : defaultSize,
      defaultShape,
      imageButtonShape,
      imageColor,
      imageData && textData && imageWithText,
    ];
  }}
`;

export const ButtonLink = styled(Link)<{
  $buttonDefaultData: Partial<TypeButton> & {
    weight: Pick<TypeDefault, 'weight'>;
  };
}>`
  ${ButtonWrapStyle};
`;
export const ButtonWrap = styled.button<{
  $buttonDefaultData: Partial<TypeButton> & {
    weight: Pick<TypeDefault, 'weight'>;
  };
}>`
  ${ButtonWrapStyle};
`;
