import React from 'react';
import { Outlet } from 'react-router-dom';

//스타일
import { PageWrap } from 'src/styles/Common.style';

//컴포넌트
import { Header } from 'src/components/organisms';

const Pages = () => {
  return (
    <PageWrap>
      <Header />
      <Outlet />
    </PageWrap>
  );
};

export default Pages;
