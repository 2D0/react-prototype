import React, { useState } from 'react';
import { TypeList } from 'interface';

//스타일
import { ColumnList } from 'src/styles/Common.style';

//컴포넌트
import { BlockList } from 'src/components/organisms';
import { ListModalWrap } from './ListModal.style';

const ListModal = ({ modalData }: { modalData: TypeList }) => {
  const [selectIndex, setSelectIndex] = useState<number | undefined>(undefined);
  const { contentType, blockListTable, blockListData } = modalData;

  console.log(blockListTable);
  return (
    <ListModalWrap>
      <ColumnList>
        <BlockList
          contentType={contentType}
          blockListTable={blockListTable}
          blockListData={{
            ...blockListData,
            selectIndex: selectIndex,
            setSelectIndex: setSelectIndex,
          }}
        />
      </ColumnList>
    </ListModalWrap>
  );
};
export default ListModal;
