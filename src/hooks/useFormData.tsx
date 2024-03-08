import { useForm } from 'react-hook-form';
import { UseFormProps } from 'react-hook-form/dist/types/form';

const useFormData = ({ formOption }: { formOption?: UseFormProps }) => {
  const {
    handleSubmit,
    control,
    register,
    getValues,
    setValue,
    watch,
    formState: { isDirty, isValid, errors },
  } = useForm(formOption && formOption);

  const useFormMethod = {
    handleSubmit,
    control,
    register,
    errors,
    isDirty,
    isValid,
    getValues,
    setValue,
    watch,
  };
  const nameRegister = {
    required: {
      value: true,
      message: '이름을 입력해 주세요.',
    },
    minLength: {
      value: 2,
      message: '최소 2자 이상의 글자를 입력해 주세요.',
    },
    pattern: {
      value: /^(?:[A-Za-z]+|[가-힣]+)$/,
      message: '올바른 이름 형식으로 입력해 주세요.',
    },
  };
  const emailRegister = {
    required: {
      value: true,
      message: '이메일을 입력해 주세요.',
    },
    pattern: {
      value: /^([a-z][-a-z0-9_.]{2,15}@[a-z][-a-z0-9_.]+\.[a-z][-a-z0-9_.]+)*$/,
      message: '이메일 형식을 지켜 주세요.',
    },
  };
  const passwordRegister = {
    required: {
      value: true,
      message: '비밀번호를 입력해 주세요.',
    },
    minLength: {
      value: 8,
      message: '최소 8자 이상의 비밀번호를 입력해 주세요.',
    },
    pattern: {
      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,16}$/,
      message:
        '비밀번호 형식을 지켜주세요.(알파벳 대문자, 소문자, 숫자, 특수문자를 포함한 8~16글자)',
    },
  };
  const passwordCheckRegister = {
    required: {
      value: true,
      message: '비밀번호 확인을 입력해 주세요.',
    },
    validate: {
      value: value => {
        const { password } = getValues();
        return password === value || ' 비밀번호가 일치하지 않습니다.';
      },
    },
  };
  const telRegister = {
    required: {
      value: true,
      message: '연락처를 입력해 주세요.',
    },
    pattern: {
      value:
        /^(?:(?:2|3[1-3]|4[1-4]|5[1-5]|6[1-4])[0-9]{6,7}|01(?:0|[1-9])[0-9]{7,8}|(?:02|0[3-6][1-5]|[1-5][0-9]{2})[0-9]{7,8})$/,
      message: '올바른 형식의 연락처를 입력해 주세요.',
    },
  };
  const birthDateRegister = {
    required: {
      value: true,
      message: '생년월일을 입력해 주세요.',
    },
    pattern: {
      value: /^\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12][0-9]|3[01])$/,
      message: '올바른 형식의 생년월일을 입력해 주세요.',
    },
  };
  const defaultRegisterHandler = inputName => ({
    required: {
      value: true,
      message: `${inputName} 입력해 주세요.`,
    },
  });
  const certificationHandler = patternValue => ({
    required: {
      value: true,
      message: '인증번호를 입력해 주세요.',
    },
    pattern: {
      value: patternValue,
      message: '인증번호가 틀렸습니다.',
    },
  });
  const allAgreeHandler = ({
    checkList,
    checked,
  }: {
    checkList: string[];
    checked: boolean;
  }) => checkList.map(item => setValue(item, checked));

  return {
    useFormMethod,
    nameRegister,
    emailRegister,
    passwordRegister,
    passwordCheckRegister,
    telRegister,
    birthDateRegister,
    defaultRegisterHandler,
    certificationHandler,
    allAgreeHandler,
  };
};
export default useFormData;
