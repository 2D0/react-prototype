import React from 'react';

//커스텀 훅
import { useModal } from 'src/hooks';

//상태 관리
import { useRecoilValue } from 'recoil';
import { modalState } from 'src/state';

//스타일
import { Navy, PopBackground, RowList } from 'src/styles/Common.style';
import { ModalWrap, ModalInner } from './Modal.style';

//컴포넌트
import { ButtonDefault, TextTitle } from 'src/components/atoms';
import { BlockList } from 'src/components/organisms';

const Modal = () => {
  const { title, content, isModalOpen, modalButtonData } =
    useRecoilValue(modalState);
  const { hideModal } = useModal();

  if (!isModalOpen) return null;

  return (
    <>
      <ModalWrap>
        <ModalInner>
          {title && (
            <TextTitle
              textTitleData={{
                type: 'MAIN',
                text: title ?? '',
              }}
            />
          )}
          {content}
          <div>
            {modalButtonData ? (
              Array.isArray(modalButtonData) ? (
                <RowList>
                  <BlockList
                    contentType={ButtonDefault}
                    blockListTable={modalButtonData}
                    blockListData={{ limit: 2 }}
                  />
                </RowList>
              ) : (
                <ButtonDefault
                  buttonDefaultData={{ ...modalButtonData, size: '100%' }}
                />
              )
            ) : (
              <ButtonDefault
                buttonDefaultData={{
                  type: 'button',
                  textData: { text: '닫기' },
                  event: hideModal,
                  color: Navy,
                  size: '100%',
                }}
              />
            )}
          </div>
        </ModalInner>
      </ModalWrap>
      <PopBackground onClick={hideModal} />
    </>
  );
};
export default Modal;
