//커스텀 훅
import { useModal } from 'src/hooks';

//상태 관리
import { useSetRecoilState } from 'recoil';
import { addressState } from 'src/state';

const usePostAddress = () => {
  const setaddressState = useSetRecoilState(addressState);
  const { hideModal } = useModal();

  const addressEvent = data => {
    setaddressState(data);
    hideModal();
  };

  return { addressEvent };
};

export default usePostAddress;
