import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

//커스텀 훅
import { useFormData, useInputHandler } from 'src/hooks';

//상태 관리
import { useAuth } from 'src/contexts/AuthContext';
import { useSetRecoilState } from 'recoil';
import { headerState } from 'src/state';

//스타일
import { GradientBlue } from 'src/styles/Common.style';

//컴포넌트
import { FormLayout } from 'src/components/templates';
import { useEventUserByOrgIdAndEmail } from 'src/queries/eventUser/useEventUserByOrgIdAndEmail';

const UserEditFormPage = () => {
  const { _userId } = useParams();
  const { user } = useAuth<'required'>();
  const setHeader = useSetRecoilState(headerState);

  const { useFormMethod, telRegister, defaultRegisterHandler, nameRegister } =
    useFormData({});
  const { onlyTextHandler, onlyNumberHandler } = useInputHandler();
  const orgId = 'blue';

  const { data } = useEventUserByOrgIdAndEmail({
    orgId: user.user_metadata.orgId ?? orgId,
    email: user.email,
  });
  const userData = (data?.relatedFaces || []).find(
    item => item.vipId === _userId,
  );
  const { name, relation, phone, sampleId, groupName } = userData || {};

  useEffect(() => {
    setHeader({
      leftButton: 'BACK',
      title: _userId && _userId !== 'target' ? '수정 하기' : '등록 하기',
    });

    return () => setHeader({});
  }, []);

  //목업 데이터
  const formInfoData = {
    useFormMethod: useFormMethod,
    formEvent: {
      navigate: '/user',
      pathName: `user_list`,
      deletePathName: `user_list`,
      data: {
        key: {
          orgId: user.user_metadata.orgId ?? orgId,
          email: user?.email,
        },
        info: userData,
        prevList: data?.relatedFaces || [],
      },
      event: () => window.location.reload(),
    },
  };

  const nameField = {
    name: 'name',
    type: 'text',
    title: '이름',
    placeholder: '이름',
    defaultValue: name ?? '',
    maxLength: 16,
    registerData: nameRegister,
    blurEvent: inputEvent => onlyTextHandler(inputEvent),
  };
  const formInfoTable = {
    imageData: {
      name: 'image',
      img: sampleId
        ? `${process.env.REACT_APP_API_URL}/lunaApi/6/samples/${sampleId}`
        : '',
      defaultValue: sampleId
        ? `${process.env.REACT_APP_API_URL}/lunaApi/6/samples/${sampleId}`
        : '',
      button: true,
      registerData: defaultRegisterHandler('이미지를'),
    },
    defaultData: {
      name: '본인 확인',
      data: groupName
        ? [
            nameField,
            {
              name: 'groupName',
              type: 'text',
              title: '학급',
              placeholder: '학급',
              defaultValue: groupName ?? '',
              maxLength: 10,
              registerData: defaultRegisterHandler('학급을'),
            },
          ]
        : [
            nameField,
            {
              name: 'relation',
              type: 'text',
              title: '가족 관계',
              placeholder: '가족 관계',
              defaultValue: relation ?? '',
              maxLength: 10,
              registerData: defaultRegisterHandler('가족 관계를'),
            },
            {
              name: 'phone',
              type: 'text',
              title: '연락처',
              placeholder: '연락처',
              defaultValue: phone ?? '',
              maxLength: 16,
              registerData: telRegister,
              blurEvent: inputEvent => onlyNumberHandler(inputEvent),
            },
          ],
    },
  };

  return (
    <FormLayout
      formLayoutData={formInfoData}
      formLayoutTable={formInfoTable}
      buttonDefaultData={{
        type: 'submit',
        color: GradientBlue,
        textData: {
          text: _userId && _userId !== 'target' ? '수정' : '등록',
        },
      }}
    />
  );
};

export default UserEditFormPage;
