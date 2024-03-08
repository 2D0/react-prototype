import React, { useEffect } from 'react';

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

const UserAddFormPage = () => {
  const { user } = useAuth<'required'>();
  const setHeader = useSetRecoilState(headerState);

  const { useFormMethod, telRegister, defaultRegisterHandler, nameRegister } =
    useFormData({});
  const { onlyTextHandler, onlyNumberHandler } = useInputHandler();
  const orgId = 'blue';

  const { data: eventUser } = useEventUserByOrgIdAndEmail({
    orgId: user.user_metadata.orgId ?? orgId,
    email: user.email,
  });

  useEffect(() => {
    setHeader({
      leftButton: 'BACK',
      title: '등록 하기',
    });

    return () => setHeader({});
  }, []);

  //목업 데이터
  const formInfoData = {
    useFormMethod: useFormMethod,
    formEvent: {
      navigate: '/user',
      pathName: `user_list`,
      data: {
        key: {
          email: user?.email,
          orgId: orgId,
        },
        prevList: eventUser?.relatedFaces || [],
      },
      event: () => window.location.reload(),
    },
  };

  const nameField = {
    name: 'name',
    type: 'text',
    title: '이름',
    placeholder: '이름',
    defaultValue: '',
    maxLength: 16,
    registerData: nameRegister,
    blurEvent: inputEvent => onlyTextHandler(inputEvent),
  };
  const formInfoTable = {
    imageData: {
      name: 'image',
      img: '',
      defaultValue: '',
      button: true,
      registerData: defaultRegisterHandler('이미지를'),
    },
    defaultData: {
      name: '본인 확인',
      data:
        eventUser?.relatedFaces?.length !== 0
          ? [
              nameField,
              {
                name: 'relation',
                type: 'text',
                title: '가족 관계',
                placeholder: '가족 관계',
                defaultValue: '',
                maxLength: 10,
                registerData: defaultRegisterHandler('가족 관계를'),
              },
              {
                name: 'phone',
                type: 'text',
                title: '연락처',
                placeholder: '연락처',
                defaultValue: '',
                maxLength: 16,
                registerData: telRegister,
                blurEvent: inputEvent => onlyNumberHandler(inputEvent),
              },
            ]
          : [
              nameField,
              {
                name: 'groupName',
                type: 'text',
                title: '학급',
                placeholder: '학급',
                defaultValue: '',
                maxLength: 10,
                registerData: defaultRegisterHandler('학급을'),
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
          text: '등록',
        },
      }}
    />
  );
};

export default UserAddFormPage;
