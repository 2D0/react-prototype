import { atom, RecoilState } from 'recoil';
import { TypeModalState } from 'interface';

//모달 종류
export const modalState: RecoilState<TypeModalState> = atom({
  key: 'modal',
  default: {
    title: undefined,
    content: undefined,
    isModalOpen: false,
    modalButtonData: undefined,
  },
});
export const sideBarState: RecoilState<{ isSideBarOpen: boolean }> = atom({
  key: 'sideBar',
  default: {
    isSideBarOpen: false,
  },
});
