import React from 'react';
import { TypeGroup } from 'interface';

//상태 관리
import { userListState } from 'src/state';
import { useSetRecoilState } from 'recoil';

//스타일
import { BoxGroupWrap } from './BoxGroup.style';

//컴포넌트
import { BlockImage, TextDefault } from 'src/components/atoms';

const BoxGroup = ({ contentData }: { contentData: TypeGroup }) => {
  const { name, listId, vipCount, listIconUrl } = contentData;
  const setListState = useSetRecoilState(userListState);

  return (
    <BoxGroupWrap
      to={`list/${listId}`}
      onClick={() => setListState({ prams: listId })}
    >
      <BlockImage blockImageData={{ img: listIconUrl }} />
      <TextDefault
        textDefaultData={{
          text: `${name || '그룹'} (${vipCount ?? '0'})`,
          weight: 500,
        }}
      />
    </BoxGroupWrap>
  );
};
export default BoxGroup;
