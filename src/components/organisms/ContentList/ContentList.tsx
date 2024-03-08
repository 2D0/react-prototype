import React, { useEffect, useState } from 'react';
import { TypeContentList } from 'interface';

//커스텀 훅
import { useAddContent } from 'src/hooks';

//스타일
import { ColumnList } from 'src/styles/Common.style';

//컴포넌트
import { ButtonDefault } from 'src/components/atoms';

const ContentList = ({
  contentType: Content,
  contentListData,
  contentListTable,
  buttonDefaultData,
}: TypeContentList) => {
  const [loading, setLoading] = useState(false);
  const { lastIndex, addContentHandler } = useAddContent(
    contentListData?.limit,
  );
  const buttonFinalData = Object.assign({}, buttonDefaultData, {
    event: addContentHandler,
  });

  return (
    <>
      <ColumnList>
        {Array.isArray(contentListTable) &&
          contentListTable.map((item, index) => {
            const finalItem = Object.assign({}, item, contentListData);

            return (
              (lastIndex ?? index + 1) > index && (
                <li key={item.id ?? item.index ?? index}>
                  <Content
                    contentData={{
                      ...finalItem,
                      index: item.index ?? index,
                    }}
                  />
                </li>
              )
            );
          })}
      </ColumnList>
      {buttonDefaultData && (
        <ButtonDefault buttonDefaultData={buttonFinalData} />
      )}
    </>
  );
};
export default ContentList;
