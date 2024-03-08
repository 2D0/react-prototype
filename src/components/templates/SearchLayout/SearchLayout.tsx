import React, { useEffect, useMemo, useState } from 'react';
import { FormProvider } from 'react-hook-form';
import { TypeForm, TypeList } from 'interface';

//커스텀 훅
import { useFormData, useGetData, useModal } from 'src/hooks';

//스타일
import {
  ColumnList,
  Navy,
  SizeMiddleRem,
  White,
} from 'src/styles/Common.style';
import { SearchLayoutWrap, SearchLayoutContent } from './SearchLayout.style';

//컴포넌트
import { Loading } from 'src/components/fallback';
import { TextModal } from 'src/components/modals';
import { TextDefault } from 'src/components/atoms';
import { BlockList } from 'src/components/organisms';
import { InputText } from 'src/components/molecules';

const SearchLayout = ({
  searchLayoutData,
  searchLayoutTable,
}: {
  searchLayoutData: Pick<TypeForm, 'useFormMethod' | 'formEvent'>;
  searchLayoutTable: TypeList;
}) => {
  const { contentType, isLoading, blockListTable, blockListData } =
    searchLayoutTable || {};
  const { useFormMethod, formEvent } = searchLayoutData;
  const { handleSubmit, getValues, errors } = useFormMethod;
  const { valueName, pathName } = formEvent;
  const [searchList, setSearchList] = useState([]);

  const { showModal, hideModal } = useModal();
  const { defaultRegisterHandler } = useFormData({});
  const { getDataDetailHandler } = useGetData({});

  const submitHandle = data => {
    const searchValue = data.search;

    getDataDetailHandler({
      handlePathName: `${pathName}=${searchValue}`,
      successHandler: resolve => {
        resolve.data
          ? setSearchList(valueName ? resolve.data[valueName] : resolve.data)
          : showModal({
              content: (
                <TextModal
                  modalData={{
                    textData: {
                      text: `"${searchValue}"의 검색 결과가 없습니다.`,
                    },
                  }}
                />
              ),
              modalButtonData: {
                textData: { text: '확인', color: White },
                color: Navy,
                event: hideModal,
              },
            });
      },
    });
  };

  const searchListMemo = useMemo(() => {
    return searchList;
  }, [searchList]);

  useEffect(() => {
    searchList && setSearchList(searchListMemo);
  }, [searchListMemo]);

  return (
    <FormProvider {...useFormMethod}>
      <SearchLayoutWrap onSubmit={handleSubmit(submitHandle)} noValidate>
        <InputText
          contentData={{
            name: 'search',
            type: 'text',
            placeholder: '검색',
            registerData: defaultRegisterHandler('검색어를'),
            errorMessage: false,
            buttonData: {
              able: getValues('search') !== '' ? !errors['search'] : false,
              type: 'submit',
              size: SizeMiddleRem,
              textData: { text: '검색' },
            },
          }}
        />
        <SearchLayoutContent>
          {isLoading ? (
            <Loading LoadingData={{ textData: { text: 'loading' } }} />
          ) : (
            <>
              <TextDefault
                textDefaultData={{
                  text: `총 ${searchList?.length || blockListTable?.length} 개`,
                }}
              />
              <ColumnList>
                <BlockList
                  contentType={contentType}
                  blockListTable={
                    searchList.length > 0 ? searchList : blockListTable
                  }
                  blockListData={blockListData}
                />
              </ColumnList>
            </>
          )}
        </SearchLayoutContent>
      </SearchLayoutWrap>
    </FormProvider>
  );
};

export default SearchLayout;
