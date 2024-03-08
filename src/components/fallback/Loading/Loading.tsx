import React from 'react';
import { TypeImage, TypeText } from 'interface';

//스타일
import { LoadingWrap } from './Loading.style';

//컴포넌트
import { TextDefault } from 'src/components/atoms';
import {
  SizeMediumRem,
  SizeMiddleLargeRem,
  SizeRegularRem,
  SizeSubTitleRem,
} from 'src/styles/Common.style';

const Loading = ({ LoadingData }: { LoadingData: { textData?: TypeText } }) => {
  const { textData } = LoadingData;

  return (
    <LoadingWrap>
      <div>
        <i></i>
        <TextDefault
          textDefaultData={{
            text: textData?.text ?? 'Loading...',
            weight: textData?.weight ?? 500,
            size: textData?.size ?? SizeSubTitleRem,
          }}
        />
      </div>
    </LoadingWrap>
  );
};
export default Loading;
