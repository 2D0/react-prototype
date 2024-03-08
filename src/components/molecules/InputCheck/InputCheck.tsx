import React from 'react';
import { Controller } from 'react-hook-form';
import { TypeInputCheck } from 'interface';
import { UseFormReturn } from 'react-hook-form/dist/types/form';

//스타일
import { InputCheckWrap, InputCheckLabel } from './InputCheck.style';

//컴포넌트
import { TextDefault } from 'src/components/atoms';

const InputCheck = ({
  inputCheckData,
}: {
  inputCheckData: TypeInputCheck & Partial<UseFormReturn>;
}) => {
  const { defaultValue, name, event, textData, able, control } = inputCheckData;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ?? ''}
      render={({ field: { value, onChange } }) => (
        <InputCheckWrap $inputCheckData={able}>
          <input
            id={name}
            type="checkbox"
            checked={value}
            onChange={checkEvent => {
              onChange(checkEvent.target.checked);
              event?.(checkEvent);
            }}
          />
          <InputCheckLabel htmlFor={name}>
            <i></i>
            {textData && <TextDefault textDefaultData={textData} />}
          </InputCheckLabel>
        </InputCheckWrap>
      )}
    />
  );
};
export default InputCheck;
