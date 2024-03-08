import React from 'react';
import { TypeModal } from 'interface';

//스타일
import { TextModalWrap } from './TextModal.style';

//컴포넌트
import { TextDefault } from 'src/components/atoms';

const TextModal = ({
  modalData,
}: {
  modalData: Pick<TypeModal, 'imageData' | 'textData'>;
}) => {
  const { textData, imageData } = modalData;

  return (
    <TextModalWrap>
      {imageData && <imageData.img />}
      <TextDefault
        textDefaultData={{
          text: textData?.text ?? '',
          weight: 600,
        }}
      />
    </TextModalWrap>
  );
};
export default TextModal;
