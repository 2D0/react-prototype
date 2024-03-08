import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { FormState, UseFormReturn } from 'react-hook-form/dist/types/form';
import { ErrorMessage } from '@hookform/error-message';
import { TypeInput } from 'interface';

//스타일
import {
  DarkGray,
  IconArrow,
  Red,
  SizeDefaultSmallRem,
} from 'src/styles/Common.style';
import { SelectBoxWrap, SelectBoxInner } from './SelectBox.style';

//컴포넌트
import { TextDefault } from 'src/components/atoms';

const SelectBox = ({
  contentData,
}: {
  contentData:
    | (TypeInput & Partial<UseFormReturn> & Partial<FormState<any>>)
    | any;
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const { control, errors, setValue } = contentData;
  const {
    title,
    name,
    type,
    event,
    values,
    blurEvent,
    placeholder,
    readOnly,
    defaultValue,
    maxLength,
    registerData,
  } = contentData;

  useEffect(() => {
    defaultValue && setValue && setValue(name, defaultValue);
  }, [defaultValue, setValue]);

  return (
    <Controller
      name={name}
      control={control}
      rules={registerData}
      defaultValue={defaultValue ?? ''}
      render={({ field }) => (
        <SelectBoxWrap>
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
          <SelectBoxInner
            onClick={() => setVisible(!visible)}
            $inputTextData={{
              visible: visible,
              valueLength: contentData.values.length,
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
                type={visible ? 'text' : type}
                maxLength={maxLength}
                placeholder={placeholder}
                autoComplete="off"
                readOnly={readOnly ?? false}
              />
              <IconArrow>
                <i></i>
              </IconArrow>
              <ul>
                {values.map((item, index) => (
                  <li
                    key={item.id}
                    onClick={() =>
                      item.id === index && setValue(name, item.name)
                    }
                  >
                    <TextDefault textDefaultData={{ text: item.name }} />
                  </li>
                ))}
              </ul>
            </div>
          </SelectBoxInner>
          {errors && (
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
        </SelectBoxWrap>
      )}
    />
  );
};
export default SelectBox;
