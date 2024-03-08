'use client';
import React from 'react';

//스타일
import { A11yHidden } from 'src/styles/Common.style';
import { PercentBarWrap, PercentBarFill } from './PercentBar.style';

//컴포넌트
import { TextDefault } from 'src/components/atoms';

const PercentBar = ({
  percentBarData,
}: {
  percentBarData: {
    dataLength: number;
    step: number;
  };
}) => {
  const { dataLength, step } = percentBarData;
  const percent = (100 / dataLength) * step;

  return (
    <PercentBarWrap>
      <PercentBarFill $percentBarData={percent}>
        <div>
          <A11yHidden>{percent}%</A11yHidden>
        </div>
      </PercentBarFill>
      <TextDefault
        textDefaultData={{
          text: `${step}/${dataLength}`,
        }}
      />
    </PercentBarWrap>
  );
};

export default PercentBar;
