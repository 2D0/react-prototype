import React from 'react';
import { TypeButton } from 'interface';

//스타일
import {
  FormSnsLoginWrap,
  FormSnsLoginBottom,
  FormSnsLoginButtons,
} from './FormSnsLogin.style';

//컴포넌트
import { ButtonDefault } from 'src/components/atoms';
import { BlockList } from 'src/components/organisms';

const FormSnsLogin = ({
  formSnsLoginData,
}: {
  formSnsLoginData: {
    contentType: ({
      buttonDefaultData,
      contentData,
    }: {
      buttonDefaultData?: TypeButton | undefined;
      contentData?: TypeButton | undefined;
    }) => JSX.Element;
    blockListTable: TypeButton[];
    lastButtonData: Partial<TypeButton>;
  };
}) => {
  const { contentType, blockListTable, lastButtonData } = formSnsLoginData;

  return (
    <FormSnsLoginWrap>
      <FormSnsLoginButtons>
        <BlockList contentType={contentType} blockListTable={blockListTable} />
      </FormSnsLoginButtons>
      <FormSnsLoginBottom>
        <ButtonDefault buttonDefaultData={lastButtonData} />
      </FormSnsLoginBottom>
    </FormSnsLoginWrap>
  );
};

export default FormSnsLogin;
