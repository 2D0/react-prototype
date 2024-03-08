import React from 'react';
import { TypeText, TypeTitle } from 'interface';

//스타일
import { TextTitleMain, TextTitleSub } from './TextTitle.style';

const TextTitle = ({
  textTitleData,
  addTextTitleData,
}: {
  textTitleData: TypeTitle;
  addTextTitleData?: Omit<TypeText, 'text'>;
}) => {
  const finalTextData = Object.assign({}, textTitleData, addTextTitleData);
  const { text, type } = finalTextData || {};

  return type === 'MAIN' ? (
    <TextTitleMain $textDefaultData={finalTextData}>{text}</TextTitleMain>
  ) : (
    <TextTitleSub $textDefaultData={finalTextData}>{text}</TextTitleSub>
  );
};
export default TextTitle;
