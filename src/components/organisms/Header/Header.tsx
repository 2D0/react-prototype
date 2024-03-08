import React from 'react';
import { useNavigate } from 'react-router';

//커스텀 훅
import { useModal } from 'src/hooks';

//상태 관리
import { useRecoilValue } from 'recoil';
import { headerState } from 'src/state';

//이미지
import { ReactComponent as SvgLogo } from 'src/assets/images/icons/ico-logo.svg';

//스타일
import {
  A11yHidden,
  BackStepButton,
  IconHamburgerButton,
} from 'src/styles/Common.style';
import {
  HeaderCenter,
  HeaderWrap,
  HeaderInner,
  HeaderLeft,
  HeaderRight,
} from './Header.style';

//컴포넌트
import { ButtonDefault, TextTitle } from 'src/components/atoms';
import { useOrgByOrgId } from 'src/queries/org/useOrgByOrgId';
import { useAuth } from 'src/contexts/AuthContext';

export function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { showSideBar } = useModal();
  const { title, leftText, leftButton, rightButton } =
    useRecoilValue(headerState);
  const { data } = useOrgByOrgId({
    orgId: user?.user_metadata?.orgId || '',
  });

  return (
    <HeaderWrap>
      <HeaderInner>
        {leftButton && (
          <HeaderLeft>
            <BackStepButton
              type="button"
              onClick={() =>
                leftButton === 'BACK' ? navigate(-1) : leftButton?.event?.()
              }
            >
              <i></i>
              <A11yHidden>뒤로 가기 버튼</A11yHidden>
            </BackStepButton>
          </HeaderLeft>
        )}
        {leftText && (
          <HeaderLeft>
            <TextTitle textTitleData={{ text: leftText }} />
          </HeaderLeft>
        )}
        {title || data?.orgName ? (
          <TextTitle textTitleData={{ text: title || data?.orgName }} />
        ) : (
          <HeaderCenter>
            <SvgLogo onClick={() => navigate('/')} />
          </HeaderCenter>
        )}
        {rightButton !== false && (
          <HeaderRight>
            {rightButton?.textData || rightButton?.imageData ? (
              <ButtonDefault buttonDefaultData={rightButton} />
            ) : (
              <IconHamburgerButton type="button" onClick={() => showSideBar()}>
                <i></i>
                <A11yHidden>사이드 메뉴 열기</A11yHidden>
              </IconHamburgerButton>
            )}
          </HeaderRight>
        )}
      </HeaderInner>
    </HeaderWrap>
  );
}

export default Header;
