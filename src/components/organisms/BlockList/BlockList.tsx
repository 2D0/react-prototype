import React from 'react';
import { TypeList } from 'interface';

const BlockList = ({
  contentType: Content,
  blockListData,
  blockListTable,
}: TypeList) =>
  Array.isArray(blockListTable) &&
  blockListTable.map((item, index) => {
    const finalItem = Object.assign({}, item, blockListData);

    return (
      (blockListData?.limit ?? index + 1) > index && (
        <li key={item.id ?? index}>
          <Content
            contentData={{
              ...finalItem,
              index: item.index ?? index,
            }}
          />
        </li>
      )
    );
  });
export default BlockList;
