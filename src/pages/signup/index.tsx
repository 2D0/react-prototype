import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

//커스텀 훅
import {
  useEmailToken,
  useFetchData,
  useFormData,
  useGetData,
  useInputHandler,
  useModal,
  useRandomString,
} from 'src/hooks';

//상태 관리
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  agreeState,
  headerState,
  modalState,
  signUpUserState,
} from 'src/state';

//스타일
import { Gray, Navy, SizeMiddleRem } from 'src/styles/Common.style';

//컴포넌트
import { ListModal, TextModal } from 'src/components/modals';
import { BoxUserInfo } from 'src/components/molecules';
import { StepFormLayout } from 'src/components/templates';

const SignUpPage = () => {
  const navigate = useNavigate();
  const time = 180000;
  const [duplicate, setDuplicate] = useState<string | undefined>('');
  const { showModal, hideModal } = useModal();
  const randomEmailToken = useRandomString(10);
  const { onlyTextHandler, onlyNumberHandler } = useInputHandler();
  const [groupName, setGroupName] = useState(undefined);

  const setHeader = useSetRecoilState(headerState);
  const setSignUpUserState = useSetRecoilState(signUpUserState);
  const setModalState = useSetRecoilState(modalState);

  const [agreeAble, setAgreeAble] = useState(false);
  const {
    agreePersonalInfo,
    agreePhotoUse,
    agreeServiceForProfit,
    agreeServiceTerms,
    agreeMarketing,
    agreeDataProcessing,
  } = useRecoilValue(agreeState);
  const {
    nameRegister,
    useFormMethod,
    passwordRegister,
    emailRegister,
    telRegister,
    defaultRegisterHandler,
    allAgreeHandler,
  } = useFormData({
    formOption: {
      mode: 'onChange',
    },
  });
  const { getValues, setValue, watch, errors } = useFormMethod;
  const { userName, email, dataProcessing, emailCheck } = getValues();
  const { marketing, personalInfo, photoUse, serviceForProfit, serviceTerms } =
    watch();

  const { data: groupData } = useFetchData({
    tableName: 'group',
  });
  const { getDataDetailHandler } = useGetData({
    pathName: undefined,
    valueName: '0',
  });

  const { emailCheckHandler } = useEmailToken({
    name: userName,
    email: email,
    emailCheck: emailCheck,
    randomEmailToken: randomEmailToken,
    time: time,
  });

  useEffect(() => {
    const essentialAgree =
      personalInfo &&
      photoUse &&
      serviceForProfit &&
      serviceTerms &&
      dataProcessing;

    setAgreeAble(essentialAgree);
    setValue('signUpAgreeAll', marketing && essentialAgree);
  }, [
    personalInfo,
    photoUse,
    serviceForProfit,
    marketing,
    serviceTerms,
    dataProcessing,
  ]);
  useEffect(() => {
    setHeader({
      leftButton: {
        event: () => {
          showModal({
            content: (
              <TextModal
                modalData={{
                  textData: {
                    text: '페이지를 이동할 경우 입력한 사항이 모두 사라집니다. 가입을 취소하시겠습니까?',
                  },
                }}
              />
            ),
          });
          setModalState(prevState => ({
            ...prevState,
            modalButtonData: [
              {
                textData: { text: '네' },
                color: Gray,
                event: () => {
                  navigate(-1);
                  hideModal();
                },
              },
              { textData: { text: '아니오' }, color: Navy, event: hideModal },
            ],
          }));
        },
      },
      title: '회원가입',
    });

    return () => setHeader({});
  }, []);

  //목업 데이터
  const formInfoData = {
    useFormMethod: useFormMethod,
    formEvent: {
      navigate: 'success',
      pathName: 'user_list',
      data: {
        groupName: groupName,
      },
    },
    navigateValue: '/',
  };
  const buttonDefaultData = {
    step: {
      type: 'button',
      textData: { text: '다음' },
    },
    submit: {
      type: 'submit',
      textData: { text: '완료' },
      event: formData => setSignUpUserState(formData),
    },
  };
  const formLayoutTable = {
    name: '회원가입',
    agree: {
      allCheck: {
        name: 'signUpAgreeAll',
        type: 'checkbox',
        message: '전체 동의',
        event: checkEvent =>
          allAgreeHandler({
            checkList: [
              'personalInfo',
              'photoUse',
              'serviceForProfit',
              'serviceTerms',
              'marketing',
              'dataProcessing',
            ],
            checked: checkEvent.target.checked,
          }),
      },
      data: [
        {
          name: 'personalInfo',
          type: 'checkbox',
          message: '개인정보 수집 및 이용 동의',
          content: { text: agreePersonalInfo },
          registerData: { required: true },
        },
        {
          name: 'photoUse',
          type: 'checkbox',
          message: '얼굴 사진 수집 및 이용 동의',
          content: { text: agreePhotoUse },
          registerData: defaultRegisterHandler('얼굴 사진 수집 및 이용'),
        },
        {
          name: 'serviceForProfit',
          type: 'checkbox',
          message: '영리 목적의 서비스 이용 동의',
          content: { text: agreeServiceForProfit },
          registerData: defaultRegisterHandler('영리 목적의 서비스 이용'),
        },
        {
          name: 'serviceTerms',
          type: 'checkbox',
          message: '서비스 이용약관 동의',
          content: { text: agreeServiceTerms },
          registerData: defaultRegisterHandler('서비스 이용약관'),
        },
        {
          name: 'marketing',
          type: 'checkbox',
          message: '마케팅 정보 수신 동의 (선택)',
          content: { text: agreeMarketing },
        },
        {
          name: 'dataProcessing',
          type: 'checkbox',
          message: '개인정보 처리 위탁 동의',
          content: { text: agreeDataProcessing },
          registerData: defaultRegisterHandler('마케팅 정보 수신'),
        },
      ],
      buttonDefaultData: {
        able: agreeAble,
      },
    },
    data: [
      {
        name: 'name',
        type: 'text',
        placeholder: '이다영',
        text: '이름',
        message: '프로필에 등록하실 이름을 입력해 주세요.',
        maxLength: 16,
        registerData: nameRegister,
        blurEvent: inputEvent => onlyTextHandler(inputEvent),
        event: () => {
          if (groupName === null) {
            showModal({
              content: (
                <TextModal
                  modalData={{
                    textData: {
                      text: '세션이 만료되었습니다. 링크로 재접속 부탁드립니다.',
                    },
                  }}
                />
              ),
            });
            setModalState(prevState => ({
              ...prevState,
              modalButtonData: {
                textData: { text: '닫기' },
                color: Gray,
                event: () => {
                  navigate('/');
                  hideModal();
                },
              },
            }));
          }
        },
      },
      {
        name: 'phone',
        type: 'text',
        placeholder: '01012345678',
        text: '연락처',
        message: '연락 받으실 번호를 입력해 주세요.',
        maxLength: 16,
        registerData: telRegister,
        event: inputEvent => setValue('phone', onlyNumberHandler(inputEvent)),
      },
      {
        name: 'groupName',
        type: 'text',
        placeholder: 'blue',
        text: '그룹 명',
        message: '그룹을 선택해주세요.',
        readOnly: true,
        maxLength: 16,
        registerData: defaultRegisterHandler('그룹을'),
        buttonData: {
          size: SizeMiddleRem,
          able: true,
          textData: {
            text: '검색',
          },
          event: () =>
            showModal({
              content: (
                <ListModal
                  modalData={{
                    contentType: BoxUserInfo,
                    blockListTable: groupData,
                    blockListData: {
                      event: groupName => {
                        setValue('groupName', groupName);
                        setGroupName(groupName);
                        hideModal();
                      },
                    },
                  }}
                />
              ),
            }),
        },
      },
      {
        name: 'email',
        type: 'email',
        placeholder: 'aaa@aaa.com',
        text: '이메일',
        message: duplicate
          ? '중복된 이메일 입니다. 다시 확인해 주세요.'
          : duplicate === ''
            ? '인증 메일을 받으실 이메일을 입력해 주세요.'
            : '중복 확인이 완료되었습니다.',
        maxLength: 32,
        registerData: emailRegister,
        buttonData: {
          size: SizeMiddleRem,
          able: getValues()['email'] !== '' ? !errors['email'] : false,
          textData: {
            text: '확인',
          },
          event: () =>
            groupName &&
            getDataDetailHandler({
              handlePathName: `test?groupName=${groupName}&email=${email}`,
              successHandler: resolve => {
                setDuplicate(resolve.data[0]?.email);
              },
              errorHandler: () => setDuplicate(''),
            }),
        },
        buttonDefaultData: {
          able:
            duplicate === undefined && getValues()['email'] !== ''
              ? !errors['email']
              : false,
          event: () => duplicate === undefined && emailCheckHandler('SEND'),
        },
      },
      {
        name: 'password',
        type: 'password',
        placeholder: '비밀번호',
        text: '비밀번호',
        message:
          '알파벳 대문자, 소문자, 숫자, 특수문자를 포함한 8~16글자로 입력해 주세요.',
        maxLength: 32,
        registerData: passwordRegister,
        visibleIcon: true,
      },
    ],
  };

  return (
    <StepFormLayout
      stepFormLayoutData={formInfoData}
      stepFormLayoutTable={formLayoutTable}
      buttonDefaultData={buttonDefaultData}
    />
  );
};

export default SignUpPage;
