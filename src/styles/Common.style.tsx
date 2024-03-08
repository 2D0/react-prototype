import styled, { css } from 'styled-components';

//스타일
import Device from './Device.style';

// ********************** 색상 **********************
export const Transparent = 'transparent';
export const White = '#fff';
export const Background = '#f4f4f4';
export const Black = '#111';
export const LightGray = '#d4d4d4';
export const Gray = '#888';
export const DarkGray = '#555';
export const Navy = '#171427';
export const Red = '#b02727';
export const Green = '#6dcc36';
export const Blue = '#4368f1';
export const DeepBlue = '#4677c8';
export const LightPurple = '#b89ce2';
export const GradientBlue = `linear-gradient(128deg, #654dd3 0.03%, #63c7de 101.88%)`;

// ********************* 사이즈 ********************
//100% 사이즈
export const SizeFullStyle = css`
  width: 100%;
  height: 100%;
`;
export const SizeFull = styled.div`
  width: 100%;
  height: 100%;
`;
export const SizeMaxWidth = `450px`;
export const SizeXSmallRem = `0.625rem`; //10px
export const SizeSmallRem = `0.75rem`; //12px
export const SizeDefaultSmallRem = `0.875rem`; //14px;
export const SizeDefaultRem = `1rem`; //16px;
export const SizeTitleRem = `1.375rem`; //22px;
export const SizeSubTitleRem = `1.125rem`; //18px;
export const SizeRegularRem = `1.5rem`; //24px;
export const SizeMediumRem = `2.5rem`; //40px;
export const SizeMiddleRem = `3.75rem`; //60px;
export const SizeMiddleLargeRem = `4.375rem`; //68px;
export const SizeExtraRem = `10rem`; //160px;

// ********************** 정렬 **********************
//display 중앙
export const Flex = css`
  display: flex;
`;
export const CenterJustify = css`
  ${Flex};
  justify-content: center;
`;
export const CenterAlign = css`
  ${Flex};
  align-items: center;
`;
export const Center = css`
  ${CenterJustify};
  align-items: center;
`;
export const PlaceCenter = css`
  display: grid;
  place-items: center;
`;

//position 중앙
export const PositionAbsolute = css`
  position: absolute;
`;
export const CenterTransform = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const CenterRowTransform = css`
  left: 50%;
  transform: translateX(-50%);
`;
export const CenterColumnTransform = css`
  top: 50%;
  transform: translateY(-50%);
`;
export const PositionCenter = css`
  ${PositionAbsolute};
  ${CenterTransform};
`;
export const PositionCenterRow = css`
  ${PositionAbsolute};
  ${CenterRowTransform};
`;
export const PositionCenterCol = css`
  ${PositionAbsolute};
  ${CenterColumnTransform};
`;
export const PositionFit = css`
  ${PositionAbsolute};
  top: 0;
  left: 0;
`;
export const PositionCenterFixed = css`
  position: fixed;
  ${CenterTransform};
`;

//사진 띄우기
export const PhotoCover = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

//그림자
export const ShadowStyle = css`
  box-shadow:
    10px 10px 25px #eaeaea,
    -10px -10px 25px #eaeaea;
`;

// ******************** 형태 ********************
export const Wrap = styled.div`
  height: 100%;
  padding: ${SizeMediumRem} ${SizeMiddleRem};

  @media ${Device.MaxWidthFull} {
    padding: ${SizeRegularRem} 0.875rem; //14px
  }
`;
export const PageWrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${SizeMaxWidth};
  margin: 0 auto;
  box-shadow: 0 0 ${SizeRegularRem} rgb(0 0 0 / 15%);
  position: relative;
  background-color: ${Background};
  padding: ${SizeMiddleLargeRem} 0;

  @media ${Device.MaxWidthFull} {
    padding: ${SizeMiddleRem} 0;
  }
  @media ${Device.MaxHeightM} {
    padding: ${SizeRegularRem} 0;
  }
`;

//컨텐츠 이너
export const WrapInnerStyle = css`
  width: 100%;
  padding: 0 ${SizeMiddleRem};

  @media ${Device.MaxWidthFull} {
    padding: 0 0.875rem; //14px
  }
`;
export const ContentInnerStyle = css`
  padding: ${SizeRegularRem};

  @media ${Device.MaxWidthFull} {
    padding: 1.25rem; //20px
  }
`;

//기본 버튼, 인풋 모양
export const CommonShapeStyle = css`
  font-size: ${SizeDefaultRem};
  border-radius: ${SizeXSmallRem};

  @media ${Device.MaxWidthFull} {
    font-size: ${SizeDefaultSmallRem};
  }
`;
export const CommonShapeButton = css`
  height: ${SizeMediumRem};
  min-height: ${SizeMediumRem};
  ${CommonShapeStyle};
`;
export const CommonShapeContentBox = css`
  width: 100%;
  height: auto;
  min-height: ${SizeMiddleLargeRem};
  padding: ${SizeDefaultSmallRem};
  ${CommonShapeStyle};
  overflow: hidden;
  position: relative;
  background-color: ${White};

  @media ${Device.MaxWidthFull} {
    padding: ${SizeXSmallRem};
  }
`;

// ******************** 기능 ********************
//웹 접근성 : 텍스트 숨기기
export const A11yHiddenStyle = css`
  display: block;
  width: 0px;
  height: 0px;
  margin: -1px 0 -1px 0;
  position: absolute;
  right: -9999px;
  overflow: hidden;
  white-space: nowrap;
  background-color: Transparent;
`;
export const A11yHidden = styled.span`
  ${A11yHiddenStyle}
`;

//컴포넌트
export const ColumnStyle = css`
  ${Flex};
  flex-direction: column;
`;
export const ColumnBlockStyle = css`
  ${ColumnStyle};
  gap: ${SizeRegularRem};
`;
export const ColumnBlock = styled.div`
  ${ColumnBlockStyle};
`;
export const ColumnListStyle = css`
  ${ColumnStyle};
  gap: ${SizeDefaultRem};
`;
export const ColumnList = styled.ul`
  ${ColumnListStyle};
`;
export const ColumnContList = styled.div`
  ${ColumnListStyle};
`;
export const ColumnSectionStyle = css`
  ${ColumnStyle};
  gap: ${SizeMiddleLargeRem};
`;
export const ColumnSection = styled.div`
  ${ColumnSectionStyle};
`;
export const RowList = styled.ul`
  ${Flex};
  gap: ${SizeDefaultSmallRem};
`;

// ******************** 아이콘 ********************
export const IconButtonStyle = css`
  width: ${SizeMediumRem};
  height: ${SizeMediumRem};

  @media ${Device.MaxWidthFull} {
    width: 2.125rem; // 34px
    min-width: 2.125rem; // 34px
    height: 2.125rem; // 34px
    min-height: 2.125rem; // 34px
  }
`;
export const IconStyle = css`
  > i {
    display: block;
    width: ${SizeDefaultRem};
    height: 0.125rem; //2px
    position: relative;
    cursor: pointer;

    &::before,
    &::after {
      display: block;
      content: '';
      ${SizeFullStyle};
      ${PositionFit};
      background-color: ${Black};
      box-shadow: 0 0 1px ${Gray};
    }
  }
`;
export const IconPlus = css`
  ${IconStyle};

  > i {
    &:after {
      transform: rotate(90deg);
    }
  }
`;
export const IconPlusButton = styled.div`
  ${IconStyle};

  > i {
    &:after {
      transform: rotate(90deg);
    }
  }
`;
export const IconClose = css`
  ${IconStyle};

  > i {
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
`;
export const IconArrow = styled.div`
  ${PlaceCenter};
  ${IconButtonStyle};

  > i {
    display: block;
    width: 10px;
    height: 10px;
    border-top: 2px solid ${Black};
    border-right: 2px solid ${Black};
    transform: rotate(-45deg);
    transition: all 0.3s ease;
  }
`;
export const IconHamburgerButton = styled.button`
  ${PlaceCenter};
  ${IconStyle};
  ${IconButtonStyle};

  > i {
    background-color: ${Black};

    &:before {
      top: -4px;
    }
    &:after {
      top: inherit;
      bottom: -4px;
    }
  }
`;
export const BackStepButton = styled(IconArrow).attrs({ as: 'button' })`
  i {
    transform: rotate(-135deg);
  }
`;

export const CommonBlockWrapStyle = css`
  width: 100%;
  max-width: ${SizeMaxWidth};
  height: fit-content;
  ${PositionCenterRow};
  position: fixed;
`;
export const CommonBlockInnerStyle = css`
  width: calc(100% - (${SizeMiddleRem} * 2));
  height: ${SizeMiddleLargeRem};
  margin: 0 auto;
  position: relative;

  @media ${Device.MaxWidthFull} {
    width: calc(100% - (0.875rem * 2));
    height: ${SizeMiddleRem};
  }
`;
export const PopBackground = styled.div`
  width: 100vw;
  height: 100vh;
  ${PositionCenterRow};
  top: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`;
