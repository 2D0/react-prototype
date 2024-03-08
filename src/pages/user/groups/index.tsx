import React from 'react';

//커스텀 훅
import { useGetData } from 'src/hooks';

//스타일
import { ColumnList } from 'src/styles/Common.style';

//컴포넌트
import { BoxGroup } from 'src/components/molecules';
import { BlockList } from 'src/components/organisms';

const GroupsPage = () => {
  const { getData } = useGetData({
    pathName: 'api/vipList',
    valueName: 'result',
  });

  return (
    <ColumnList>
      <BlockList contentType={BoxGroup} blockListTable={getData} />
    </ColumnList>
  );
};

export default GroupsPage;
