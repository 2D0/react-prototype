import { TypeModalState } from 'interface';

//상태 관리
import { useSetRecoilState } from 'recoil';
import { modalState, sideBarState } from 'src/state';

const useModal = () => {
  const setModalType = useSetRecoilState(modalState);
  const setSideBarType = useSetRecoilState(sideBarState);

  const showModal = ({
    title: title,
    content: content,
    modalButtonData: modalButtonData,
  }: Partial<TypeModalState>) => {
    setModalType({
      title,
      content,
      isModalOpen: true,
      modalButtonData,
    });
  };

  const hideModal = () => {
    setModalType({
      title: undefined,
      content: undefined,
      isModalOpen: false,
      modalButtonData: undefined,
    });
  };

  const showSideBar = () => {
    setSideBarType({
      isSideBarOpen: true,
    });
  };
  const hideSideBar = () => {
    setSideBarType({
      isSideBarOpen: false,
    });
  };

  return { showModal, hideModal, showSideBar, hideSideBar };
};

export default useModal;
