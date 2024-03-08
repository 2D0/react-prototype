import styled from 'styled-components';

//스타일
import Device from 'src/styles/Device.style';
import {
  ColumnBlock,
  ColumnBlockStyle,
  ColumnSectionStyle,
  SizeXSmallRem,
} from 'src/styles/Common.style';

export const StepFormLayoutWrap = styled.form`
  ${ColumnSectionStyle};
  height: 100%;
`;
export const StepFormLayoutTop = styled.div`
  position: relative;

  > button {
    position: absolute;
    top: 0.375rem; //6px
    left: -0.438rem; //-7px
  }
`;
export const StepFormLayoutBottom = styled.fieldset`
  height: 100%;
  ${ColumnBlockStyle};
`;
export const StepFormLayoutContent = styled(ColumnBlock)`
  height: 100%;

  > div {
    ${ColumnBlockStyle};
  }

  @media ${Device.MaxWidthFull} {
    justify-content: space-between;
  }
`;

export const StepFormAgree = styled.div`
  height: 100%;
  overflow-y: auto;

  > ul {
    ${ColumnBlockStyle};

    @media ${Device.MaxWidthFull} {
      gap: ${SizeXSmallRem};
    }
  }
`;
