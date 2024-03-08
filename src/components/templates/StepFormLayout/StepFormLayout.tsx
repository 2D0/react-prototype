import React, { useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { TypeButton, TypeForm } from 'interface';

//커스텀 훅
import { useUpdateData } from 'src/hooks';

//상태 관리
import { useAuth } from 'src/contexts/AuthContext';
import { useSetRecoilState } from 'recoil';
import { userState } from 'src/state';

//이미지
import { ReactComponent as SvgBackStep } from 'src/assets/images/icons/ico-backStep.svg';

//스타일
import { BackStepButton } from 'src/styles/Common.style';
import {
  StepFormLayoutWrap,
  StepFormLayoutContent,
  StepFormAgree,
  StepFormLayoutTop,
  StepFormLayoutBottom,
} from './StepFormLayout.style';

//컴포넌트
import { ButtonDefault, TextDefault, TextTitle } from 'src/components/atoms';
import {
  InputText,
  BoxAgree,
  InputCheck,
  PercentBar,
} from 'src/components/molecules';
import { BlockList } from 'src/components/organisms';

const StepFormLayout = ({
  stepFormLayoutData,
  stepFormLayoutTable,
  buttonDefaultData,
}: {
  stepFormLayoutData: Pick<TypeForm, 'useFormMethod' | 'formEvent'>;
  stepFormLayoutTable: Pick<
    TypeForm,
    'selectData' | 'name' | 'imageData' | 'data' | 'agree'
  >;
  buttonDefaultData: { step: TypeButton; submit: TypeButton };
}) => {
  const { agree, data } = stepFormLayoutTable;
  const { useFormMethod, formEvent } = stepFormLayoutData;
  const { pathName, navigate, data: formData } = formEvent || {};
  const [step, setStep] = useState(0);
  const setUserState = useSetRecoilState(userState);
  const postFormData = useUpdateData({
    methodName: 'POST',
    pathName: pathName,
  });

  const authContext = useAuth();
  const { signUp } = authContext;
  const { errors, getValues } = useFormMethod;
  const currentFieldName = data[step - 1]?.name;
  const isCurrentFieldValid =
    getValues()[currentFieldName] !== '' ? !errors[currentFieldName] : false;

  const submitHandle = submitData => {
    const { email, password, signUpAgreeAll, ...rest } = submitData || {};
    const infoData = {
      email,
      ...formData,
    };
    const AuthData = {
      email,
      password,
      user_metadata: {
        ...formData,
        ...rest,
      },
    };

    step === data.length &&
      postFormData({
        dataValue: infoData,
        navigateValue: navigate,
        successHandler: resolve => {
          buttonDefaultData.submit.event?.(resolve.data);
          setUserState(prevData => ({ ...prevData, email, ...rest }));
          signUp(AuthData);
        },
      });
  };

  return (
    <FormProvider {...useFormMethod}>
      <StepFormLayoutWrap
        onSubmit={useFormMethod?.handleSubmit(submitHandle)}
        noValidate
      >
        <StepFormLayoutTop>
          {(agree ? step > 0 : step > 1) && (
            <BackStepButton type="button" onClick={() => setStep(step - 1)}>
              <SvgBackStep />
              <TextDefault
                textDefaultData={{
                  text: '전단계',
                  size: '.75rem',
                  weight: 600,
                }}
              />
            </BackStepButton>
          )}
          <PercentBar
            percentBarData={{
              dataLength: data.length,
              step: step,
            }}
          />
        </StepFormLayoutTop>
        <StepFormLayoutBottom>
          {agree && step === 0 && (
            <>
              <TextTitle
                textTitleData={{
                  type: 'SUB',
                  text: '약관 동의 :',
                }}
              />
              <StepFormAgree>
                <ul>
                  <BlockList
                    contentType={BoxAgree}
                    blockListData={{ ...useFormMethod }}
                    blockListTable={agree.data}
                  />
                </ul>
              </StepFormAgree>
              {agree.allCheck && (
                <InputCheck
                  inputCheckData={{
                    ...useFormMethod,
                    name: agree?.allCheck?.name,
                    textData: { text: '전체동의' },
                    event: checkEvent => agree.allCheck?.event?.(checkEvent),
                  }}
                />
              )}
              <ButtonDefault
                buttonDefaultData={{
                  able: agree?.buttonDefaultData?.able,
                  size: '100%',
                  ...buttonDefaultData.step,
                  event: () =>
                    agree?.buttonDefaultData?.able && setStep(step + 1),
                }}
              />
            </>
          )}
          {step > 0 &&
            data.map((item, index) => {
              const buttonData = Object.assign(
                {},
                {
                  able: isCurrentFieldValid,
                  size: '100%',
                },
                item.buttonDefaultData,
              );

              return (
                step === index + 1 && (
                  <StepFormLayoutContent key={item.name}>
                    <div>
                      <legend>
                        <TextTitle
                          textTitleData={{
                            type: 'SUB',
                            text: `${item?.text} :` ?? '',
                          }}
                        />
                      </legend>
                      <InputText
                        contentData={{
                          ...item,
                          ...useFormMethod,
                          able: isCurrentFieldValid,
                        }}
                      />
                      <TextDefault
                        textDefaultData={{
                          text: item.message,
                          weight: 500,
                        }}
                      />
                    </div>
                    <ButtonDefault
                      buttonDefaultData={{
                        ...buttonData,
                        ...(step === data.length
                          ? buttonDefaultData.submit
                          : buttonDefaultData.step),
                        event: () => {
                          if (isCurrentFieldValid && step !== data.length) {
                            item.buttonDefaultData?.event?.();
                            setStep(step + 1);
                          }
                        },
                      }}
                    />
                  </StepFormLayoutContent>
                )
              );
            })}
        </StepFormLayoutBottom>
      </StepFormLayoutWrap>
    </FormProvider>
  );
};
export default StepFormLayout;
