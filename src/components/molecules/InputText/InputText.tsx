import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { TypeInput } from 'interface';

//이미지
import { ReactComponent as SvgVisible } from 'src/assets/images/icons/ico-visible.svg';
import { ReactComponent as SvgVisibleOff } from 'src/assets/images/icons/ico-visible-off.svg';

//스타일
import {
  DarkGray,
  Red,
  SizeDefaultSmallRem,
  Transparent,
} from 'src/styles/Common.style';
import { InputTextWrap, InputTextBox, InputTextRight } from './InputText.style';

//컴포넌트
import { ButtonDefault, TextDefault } from 'src/components/atoms';
import { useTimer } from 'src/hooks';
import { FormState, UseFormReturn } from 'react-hook-form/dist/types/form';

const InputText = ({
  contentData,
}: {
  contentData: TypeInput & Partial<UseFormReturn> & Partial<FormState<any>>;
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const { control, errors, setValue } = contentData;
  const {
    title,
    name,
    type,
    event,
    blurEvent,
    placeholder,
    errorMessage,
    readOnly,
    defaultValue,
    maxLength,
    registerData,
    visibleIcon,
    buttonData,
  } = contentData;

  const { time, timerHandler } = useTimer({
    timerMode: 'TIMER',
    timeValue: buttonData?.timer,
  });

  useEffect(() => {
    buttonData?.timer && timerHandler(buttonData?.timer);
  }, [time]);

  useEffect(() => {
    defaultValue && setValue && setValue(name, defaultValue);
  }, [defaultValue, setValue]);

  return (
    <Controller
      name={name}
      control={control}
      rules={registerData}
      defaultValue={defaultValue ?? ''}
      render={({ field, fieldState: { error } }) => (
        <InputTextWrap>
          {title && (
            <p>
              <TextDefault
                textDefaultData={{
                  text: title,
                  color: DarkGray,
                }}
              />
            </p>
          )}
          <InputTextBox
            $inputTextData={{
              visibleIcon,
              buttonData: { size: buttonData?.size, timer: buttonData?.timer },
              errors: !!error,
            }}
          >
            <div>
              <input
                {...field}
                onChange={inputValue => {
                  field.onChange(inputValue?.target?.value);
                  event?.(inputValue);
                }}
                onBlur={inputValue => {
                  field.onBlur();
                  blurEvent?.(inputValue);
                }}
                type={visibleIcon ? (visible ? 'text' : type) : type}
                maxLength={maxLength}
                placeholder={placeholder}
                autoComplete="off"
                readOnly={readOnly ?? false}
              />
              {(buttonData || visibleIcon) && (
                <InputTextRight>
                  {buttonData?.timer && (
                    <TextDefault textDefaultData={{ text: time }} />
                  )}
                  <ButtonDefault
                    buttonDefaultData={
                      visibleIcon
                        ? {
                            imageData: {
                              img: visible ? SvgVisible : SvgVisibleOff,
                            },
                            able: true,
                            event: () => setVisible(!visible),
                            color: Transparent,
                          }
                        : buttonData
                    }
                  />
                </InputTextRight>
              )}
            </div>
          </InputTextBox>
          {errorMessage && (
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => (
                <TextDefault
                  textDefaultData={{
                    text: message ?? '',
                    size: SizeDefaultSmallRem,
                    weight: 400,
                    color: Red,
                  }}
                />
              )}
            />
          )}
        </InputTextWrap>
      )}
    />
  );
};
export default InputText;
