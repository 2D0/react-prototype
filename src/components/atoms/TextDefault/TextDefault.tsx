import React from 'react';
import { TypeText } from 'interface';

//스타일
import { DefaultText, DefaultTextLink } from './TextDefault.style';

const TextDefault = ({
  textDefaultData,
  addTextDefaultData,
}: {
  textDefaultData: TypeText;
  addTextDefaultData?: Omit<TypeText, 'text'>;
}) => {
  const finalTextData = Object.assign({}, textDefaultData, addTextDefaultData);
  const { url, text, target } = finalTextData;

  return url ? (
    <DefaultTextLink
      to={url}
      target={target || '_self'}
      $textDefaultData={finalTextData}
    >
      {text}
    </DefaultTextLink>
  ) : (
    <DefaultText $textDefaultData={finalTextData}>{text}</DefaultText>
  );
};
export default TextDefault;
