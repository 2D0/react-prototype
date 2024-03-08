import React from 'react';
import { FormProvider } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { TypeButton, TypeForm, TypeFormTable } from 'interface';

//커스텀 훅
import { useUpdateData } from 'src/hooks';

//상태 관리
import { useRecoilValue } from 'recoil';
import { userState } from 'src/state';

//스타일
import { Black, Transparent } from 'src/styles/Common.style';
import { FormLayoutWrap, FormLayoutContent } from './FormLayout.style';

//컴포넌트
import { ButtonDefault } from 'src/components/atoms';
import { BoxFile, InputText, SelectBox } from 'src/components/molecules';
import { BlockList } from 'src/components/organisms';

const FormLayout = ({
  formLayoutData,
  formLayoutTable,
  buttonDefaultData,
}: {
  formLayoutData: Pick<TypeForm, 'useFormMethod' | 'formEvent'>;
  formLayoutTable: TypeFormTable;
  buttonDefaultData: TypeButton;
}) => {
  const { _userId } = useParams();
  const { sample_id, vipId } = useRecoilValue(userState);
  const { useFormMethod, formEvent } = formLayoutData;
  const { data, pathName, navigate, event } = formEvent || {};
  const { defaultData, imageData, selectData } = formLayoutTable;

  const postData = useUpdateData({
    methodName: 'POST',
    pathName: pathName,
  });
  const vipList = data.prevList.filter(
    item => item.vipId !== data?.info?.vipId,
  );

  const submitHandler = submitData => {
    const infoData = {
      ...submitData,
      sampleId: sample_id,
      vipId: vipId,
    };
    const editData = Object.assign({}, data?.info, submitData);

    _userId !== undefined
      ? postData({
          dataValue: {
            ...data?.key,
            relatedFaces: data?.info?.groupName
              ? [editData, ...vipList]
              : [...vipList, editData],
          },
          navigateValue: navigate,
          successHandler: () => event?.(),
        })
      : postData({
          dataValue: {
            ...data?.key,
            relatedFaces: [...data.prevList, infoData],
          },
          navigateValue: navigate,
          successHandler: () => event?.(),
        });
  };
  const deleteHandler = () => {
    postData({
      dataValue: {
        ...data?.key,
        relatedFaces: vipList,
      },
      navigateValue: navigate,
      successHandler: () => event?.(),
    });
  };

  return (
    <FormProvider {...useFormMethod}>
      <FormLayoutWrap
        onSubmit={useFormMethod?.handleSubmit(submitHandler)}
        noValidate
      >
        <FormLayoutContent>
          {imageData && (
            <BoxFile contentData={{ ...imageData, ...useFormMethod }} />
          )}
          {selectData && (
            <SelectBox contentData={{ ...selectData, ...useFormMethod }} />
          )}
          <ul>
            <BlockList
              contentType={InputText}
              blockListData={{ ...useFormMethod, errorMessage: true }}
              blockListTable={defaultData?.data}
            />
          </ul>
          {_userId && data?.info?.relation && (
            <ButtonDefault
              buttonDefaultData={{
                type: 'button',
                textData: { text: '삭제하기', color: Black },
                size: 'fit-content',
                color: Transparent,
                event: () => _userId && deleteHandler(),
              }}
            />
          )}
        </FormLayoutContent>
        <ButtonDefault buttonDefaultData={buttonDefaultData} />
      </FormLayoutWrap>
    </FormProvider>
  );
};
export default FormLayout;
