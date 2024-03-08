import React from 'react';
import { TypeButton, TypeImage, TypeText, TypeUser } from 'interface';

//스타일
import { ConfirmContent, ConfirmWrap } from './ConfirmLayout.style';

//컴포넌트
import { ButtonDefault, TextDefault } from 'src/components/atoms';
import { BoxUser } from 'src/components/molecules';

const ConfirmLayout = ({
  confirmLayoutData,
}: {
  confirmLayoutData: {
    imageData?: TypeImage;
    userData?: TypeUser;
    textData: TypeText;
    buttonData: TypeButton;
  };
}) => {
  const { imageData, textData, buttonData, userData } = confirmLayoutData || {};

  return (
    <ConfirmWrap>
      <ConfirmContent>
        {imageData?.svg && <imageData.svg />}
        <TextDefault textDefaultData={textData} />
        {userData && <BoxUser boxUserData={userData} />}
      </ConfirmContent>
      <ButtonDefault buttonDefaultData={buttonData} />
    </ConfirmWrap>
  );
};
export default ConfirmLayout;
