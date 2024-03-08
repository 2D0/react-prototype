import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

//스타일
import Device from 'src/styles/Device.style';
import {
  White,
  SizeRegularRem,
  SizeSmallRem,
  SizeXSmallRem,
  GradientBlue,
  ColumnListStyle,
  SizeDefaultRem,
} from 'src/styles/Common.style';

export const SideBarWrap = styled.nav<{ $isSideBar: boolean }>`
  width: 15.625rem; //250px
  height: 100vh;
  position: absolute;
  top: 0;
  right: ${({ $isSideBar }) => ($isSideBar ? '0' : '-100%')};
  ${({ $isSideBar }) =>
    $isSideBar &&
    css`
      z-index: 1001;
    `};
  background-color: ${White};
  transition: all 0.3s;

  @media ${Device.MaxWidthFull} {
    width: 12.5rem; //200px
  }
`;

export const SideBarInner = styled.div`
  ${ColumnListStyle};
  height: inherit;
  padding-bottom: ${SizeDefaultRem};
`;

export const SideBarInfo = styled(Link)`
  display: grid;
  grid-template-columns: 2.125rem 1fr; //34px
  gap: ${SizeXSmallRem};
  align-items: center;
  padding: ${SizeSmallRem} ${SizeRegularRem};
  background: ${GradientBlue};

  @media ${Device.MaxWidthFull} {
    grid-template-columns: 1.875rem 1fr; //30px
    gap: 0.375rem; //6px
    padding: ${SizeXSmallRem} ${SizeRegularRem};
  }
`;
export const SideBarList = styled.ul`
  overflow-y: auto;

  > li {
    > a,
    > button {
      justify-content: flex-start;
      padding: 0 ${SizeRegularRem};

      @media ${Device.MaxWidthFull} {
        padding: 0 ${SizeRegularRem};
      }
    }
  }
`;
