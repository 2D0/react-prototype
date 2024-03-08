import React from 'react';

//스타일
import { Transparent } from 'src/styles/Common.style';
import { FooterWrap, FooterInner } from './Footer.style';

//이미지
import { ReactComponent as SvgLogo } from 'src/assets/images/icons/ico-logo-white.svg';

//컴포넌트
import { ButtonDefault } from 'src/components/atoms';

const Footer = () => {
  return (
    <FooterWrap>
      <FooterInner>
        <ButtonDefault
          buttonDefaultData={{
            url: 'https://univs.ai',
            target: '_blank',
            imageData: { img: SvgLogo },
            color: Transparent,
            size: 'fit-content',
          }}
        />
      </FooterInner>
    </FooterWrap>
  );
};
export default Footer;
