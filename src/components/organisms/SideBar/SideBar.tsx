import React, { useEffect } from 'react';

//커스텀 훅
import { useModal, useUpdateData } from 'src/hooks';

//상태 관리
import { useAuth } from 'src/contexts/AuthContext';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modalState, sideBarState } from 'src/state';

//이미지
import noFace from 'src/assets/images/icons/ico-noimg.svg';

//스타일
import {
  Black,
  Gray,
  Navy,
  PopBackground,
  Transparent,
  White,
} from 'src/styles/Common.style';
import {
  SideBarWrap,
  SideBarInner,
  SideBarInfo,
  SideBarList,
} from './SideBar.style';

//컴포넌트
import { ButtonDefault, TextDefault } from 'src/components/atoms';
import { BlockList } from 'src/components/organisms';
import { BoxImage } from 'src/components/molecules';
import { TextModal } from 'src/components/modals';

export function SideBar() {
  const authContext = useAuth();
  const { isSideBarOpen } = useRecoilValue(sideBarState);
  const { showModal, hideModal, hideSideBar } = useModal();
  const setModalState = useSetRecoilState(modalState);

  const orgId = sessionStorage.getItem('orgId');
  const { signOut, user } = authContext;
  const { user_metadata } = user || {};
  const deleteData = useUpdateData({
    methodName: 'DELETE',
    pathName: `user_list`,
  });

  const menuDataLogin = [
    // {
    //   textData: {
    //     text: `회원 정보 ${user_metadata?.img ? '수정' : '저장'}`,
    //     color: Black,
    //   },
    //   url: '/user/form',
    //   size: '100%',
    //   color: Transparent,
    // },
    // {
    //   textData: {
    //     text: '회원 탈퇴',
    //     color: Black,
    //   },
    //   size: '100%',
    //   event: () => {
    //     showModal({
    //       content: (
    //         <TextModal
    //           modalData={{
    //             textData: {
    //               text: `탈퇴 후 다시 가입하실 경우 시설에 문의하셔야 합니다.\n
    //                 정말로 탈퇴하시겠습니까?`,
    //             },
    //           }}
    //         />
    //       ),
    //     });
    //     setModalState(prevState => ({
    //       ...prevState,
    //       modalButtonData: [
    //         {
    //           textData: { text: '네' },
    //           color: Gray,
    //           event: () => {
    //             deleteData({
    //               dataValue: { orgId: orgId, email: user?.email },
    //               navigateValue: '/user/remove',
    //               successHandler: () => {
    //                 signOut();
    //                 hideModal();
    //               },
    //             });
    //           },
    //         },
    //         { textData: { text: '아니오' }, color: Navy, event: hideModal },
    //       ],
    //     }));
    //   },
    //   color: Transparent,
    // },
    {
      textData: {
        text: '로그아웃',
        color: Black,
      },
      size: '100%',
      event: () => signOut(),
      color: Transparent,
    },
  ];

  useEffect(() => {
    return () => hideSideBar();
  }, []);

  if (!isSideBarOpen) return null;

  return (
    <>
      <SideBarWrap $isSideBar={isSideBarOpen}>
        <SideBarInner>
          <SideBarInfo
            to={user ? '/user' : '/signin'}
            onClick={() => hideSideBar()}
          >
            <BoxImage
              contentData={{
                imageData: {
                  img: user
                    ? `${process.env.REACT_APP_API_URL}/lunaApi/6/samples/${user_metadata?.img}`
                    : noFace,
                  errorImg: noFace,
                },
              }}
            />
            <TextDefault
              textDefaultData={{
                text: user ? `접속 중` : '로그인 하기',
                color: White,
                weight: 500,
              }}
            />
          </SideBarInfo>
          {user && (
            <SideBarList onClick={() => hideSideBar()}>
              <BlockList
                contentType={ButtonDefault}
                blockListTable={menuDataLogin}
              />
            </SideBarList>
          )}
        </SideBarInner>
      </SideBarWrap>

      {isSideBarOpen && <PopBackground onClick={hideSideBar} />}
    </>
  );
}

export default SideBar;
