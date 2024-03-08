import React from 'react';
import { Controller } from 'react-hook-form';
import { TypeInputCheck } from 'interface';
import { UseFormReturn } from 'react-hook-form/dist/types/form';

//스타일
import { InputRadioWrap, InputRadioLabel } from './InputRadio.style';

//컴포넌트
import { TextDefault } from 'src/components/atoms';

const InputRadio = ({
  inputRadioData,
}: {
  inputRadioData: TypeInputCheck & Partial<UseFormReturn>;
}) => {
  const { name, event, textData, able, control } = inputRadioData;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ref } }) => (
        <InputRadioWrap $inputRadioData={able}>
          <input
            id={name}
            ref={ref}
            type="radio"
            checked={value}
            onChange={checkEvent => {
              onChange(checkEvent.target.checked);
              event?.(checkEvent);
            }}
          />
          <InputRadioLabel htmlFor={name}>
            <i></i>
            {textData && <TextDefault textDefaultData={textData} />}
          </InputRadioLabel>
        </InputRadioWrap>
      )}
    ></Controller>
  );
};
export default InputRadio;
