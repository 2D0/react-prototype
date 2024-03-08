import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { Route, Routes } from 'react-router-dom';

//커스텀 훅
import { useModal } from 'src/hooks';

//상태 관리
import { useAuth } from 'src/contexts/AuthContext';
import { useRecoilValue } from 'recoil';
import { modalState } from 'src/state';

//컴포넌트
import { Modal } from 'src/components/templates';

//레이아웃
import { InnerScreen } from 'src/components/Layouts';

//페이지
import {
  ListPage,
  SuccessPage,
  UserAddFormPage,
  UserEditFormPage,
  SignInPage,
  SignInSnsPage,
  SignUpPage,
  SignUpSuccessPage,
  KakaoCallback,
  UserDetailPage,
  AccountRemovePage,
  SearchPage,
} from 'src/pages';
import { SideBar } from 'src/components/organisms';

const LayoutRoot = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  const { hideModal } = useModal();
  const { isModalOpen } = useRecoilValue(modalState);

  useEffect(() => {
    window['backPress'] = () => {
      if (isModalOpen) hideModal();
      else window.history.length > 1 ? navigate(-1) : window.close();
    };
  }, [isModalOpen]);

  if (isLoading) {
    return <div />;
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<InnerScreen />}>
          <Route path="" element={user ? <UserDetailPage /> : <SignInPage />} />
          <Route path="user" element={!user && <Navigate to={'/signin'} />}>
            <Route path="" element={<UserDetailPage />} />
            <Route path="form">
              <Route path="" element={<UserAddFormPage />} />
              <Route path=":_userId" element={<UserEditFormPage />} />
            </Route>
          </Route>
          {/*<Route path="user/remove" element={<AccountRemovePage />} />*/}
          <Route path="signin" element={user && <Navigate to={'/user'} />}>
            <Route path="" element={<SignInPage />} />
            <Route path="sns" element={<SignInSnsPage />} />
          </Route>
          <Route path="signup" element={user && <Navigate to={'/user'} />}>
            <Route path="" element={<SignUpPage />} />
          </Route>
        </Route>
      </Routes>
      <SideBar />
      <Modal />
    </>
  );
};

export default LayoutRoot;
