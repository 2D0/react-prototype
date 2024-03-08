import React from 'react';
import { Outlet } from 'react-router-dom';

//컴포넌트
import { Wrap } from 'src/styles/Common.style';
import { Footer, Header } from 'src/components/organisms';

const InnerScreen = () => (
  <Wrap>
    <Header />
    <Outlet />
    <Footer />
  </Wrap>
);

export default InnerScreen;
