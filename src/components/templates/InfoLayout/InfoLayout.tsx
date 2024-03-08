import React from 'react';
import { TypeBoxImage, TypeButton } from 'interface';

//스타일
import { ColumnContList } from 'src/styles/Common.style';
import { InfoLayoutImageList, InfoLayoutWrap } from './InfoLayout.style';

//컴포넌트
import { ButtonDefault, TextTitle } from 'src/components/atoms';
import { BoxImage } from 'src/components/molecules';
import { BlockList } from 'src/components/organisms';

const InfoLayout = ({
  infoLayoutData,
}: {
  infoLayoutData: {
    imageTable: TypeBoxImage[];
    buttonDefaultData?: TypeButton;
  };
}) => {
  const { imageTable, buttonDefaultData } = infoLayoutData || {};
  const { title, groupName } =
    (imageTable || []).find(item => item.title !== undefined) || {};

  return (
    <InfoLayoutWrap>
      <ColumnContList>
        {imageTable && (
          <TextTitle
            textTitleData={{
              text: title ?? imageTable[0].name,
            }}
          />
        )}
        <InfoLayoutImageList>
          <ul>
            <BlockList
              contentType={BoxImage}
              blockListTable={imageTable}
              blockListData={{}}
            />
          </ul>
        </InfoLayoutImageList>
      </ColumnContList>
      {buttonDefaultData && (
        <ButtonDefault buttonDefaultData={buttonDefaultData} />
      )}
    </InfoLayoutWrap>
  );
};

export default InfoLayout;
