import React, { SyntheticEvent } from 'react';
import { FormProvider, UseFormHandleSubmit } from 'react-hook-form';
import { TypeButton, TypeForm, TypeInput } from 'interface';

//상태 관리
import { useAuth } from 'src/contexts/AuthContext';

//스타일
import {
  FormLayoutButtons,
  FormLayoutContent,
  FormLayoutWrap,
} from 'src/components/templates/FormLayout/FormLayout.style';

//컴포넌트
import { ButtonDefault } from 'src/components/atoms';
import { InputText } from 'src/components/molecules';
import { BlockList } from 'src/components/organisms';

const FormLogin = ({
  formLayoutData,
  formLayoutTable,
  buttonDefaultData,
  subButtonData,
}: {
  formLayoutData: Pick<TypeForm, 'useFormMethod' | 'formEvent'>;
  formLayoutTable: TypeInput[];
  buttonDefaultData: TypeButton;
  subButtonData?: TypeButton;
}) => {
  const authContext = useAuth();
  const { signInWithPassword } = authContext;
  const { useFormMethod } = formLayoutData;
  const { handleSubmit }: { handleSubmit: UseFormHandleSubmit<any, any> } =
    useFormMethod;

  const onSubmit = (
    data: { email: string; password: string },
    e: SyntheticEvent,
  ) => {
    signInWithPassword({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <FormProvider {...useFormMethod}>
      <FormLayoutWrap onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormLayoutContent>
          <ul>
            <BlockList
              contentType={InputText}
              blockListData={{ ...useFormMethod, errorMessage: true }}
              blockListTable={formLayoutTable}
            />
          </ul>
        </FormLayoutContent>
        <FormLayoutButtons>
          <ButtonDefault buttonDefaultData={buttonDefaultData} />
          {subButtonData && <ButtonDefault buttonDefaultData={subButtonData} />}
        </FormLayoutButtons>
      </FormLayoutWrap>
    </FormProvider>
  );
};
export default FormLogin;
