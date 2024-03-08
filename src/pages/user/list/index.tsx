import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

//커스텀 훅
import { useFormData, useGetData, useInfiniteScroll } from 'src/hooks';

//상태 관리
import { useSetRecoilState } from 'recoil';
import { headerState } from 'src/state';

//이미지
import { ReactComponent as SvgAddFace } from 'src/assets/images/icons/ico-addFace.svg';

//스타일
import { Navy, SizeFull, Transparent } from 'src/styles/Common.style';

//컴포넌트
import { BoxUserInfo } from 'src/components/molecules';
import { SearchLayout } from 'src/components/templates';

const ListPage = () => {
  const { listId } = useParams();
  const formRef = useRef<HTMLDivElement>(null);
  const limitValue = 10;
  const [selectIndex, setSelectIndex] = useState<number | undefined>(undefined);
  const setHeader = useSetRecoilState(headerState);

  const { useFormMethod } = useFormData({});
  const orgId = sessionStorage.getItem('orgId');
  const { getData, isLoading } = useGetData({
    pathName: `user_list`,
    // valueName: '0',
  });

  const { listItem } = useInfiniteScroll({
    pathName: 'user/page',
    valueName: 'docs',
    limitValue: 10,
    ref: formRef,
  });

  useEffect(() => {
    setHeader({
      title: '한길 어린이집',
    });

    return () => setHeader({});
  }, []);

  //목업 데이터
  const searchData = {
    useFormMethod: useFormMethod,
    formEvent: {
      pathName: `user/page?page=1&limit=20&all`,
      valueName: 'docs',
    },
  };
  const searchLayoutTable = {
    contentType: BoxUserInfo,
    limit: limitValue,
    page: limitValue,
    isLoading: isLoading,
    blockListTable: getData,
    blockListData: {
      selectIndex: selectIndex,
      setSelectIndex: setSelectIndex,
      listId: listId,
    },
  };

  return (
    <SizeFull ref={formRef}>
      <SearchLayout
        searchLayoutData={searchData}
        searchLayoutTable={searchLayoutTable}
      />
    </SizeFull>
  );
};

export default ListPage;
