import { useCallback, useEffect, useRef, useState } from 'react';

//커스텀 훅
import { useSendEmail, useFormatTime, useGetData } from 'src/hooks';

const useEmailToken = ({ name, email, time, emailCheck, randomEmailToken }) => {
  const timerRef = useRef<any>();
  const { sendEmail } = useSendEmail();
  const [timer, setTimer] = useState<number | undefined>(time);
  const { minutes } = useFormatTime(timer);

  const [emailValue, setEmailValue] = useState(null);
  const [emailDuplicate, setEmailDuplicate] = useState(false);
  const [emailAble, setEmailAble] = useState(false);
  const [emailToken, setEmailToken] = useState<any>(null);
  const [emailCertification, setEmailCertification] = useState<
    string | undefined
  >(undefined);

  // const { getData, getDataHandler } = useGetData({
  //   pathName: undefined,
  // });

  const storageToken = sessionStorage.getItem('emailToken');
  const emailDefaultMessage = `"${email ?? ''}"로 인증 문자를 전송하였습니다. 
  ${minutes}분 이내에 인증번호를 입력해 주세요.`;

  // useEffect(() => {
  //   getDataHandler({});
  //   setEmailDuplicate(emailDuplicate);
  // }, [email, getData]);

  const sendTokenHandler = useCallback(() => {
    if (name && email) {
      sendEmail({
        serviceId: 'univs.ai',
        templateId: 'template_join_token',
        userKey: 'aI9BP_urKP4GyvGMs',
        templateParams: {
          title_message: '"유니버스" 회원가입 인증 메일입니다.',
          to_name: name,
          to_email: email,
          email_token: sessionStorage.getItem('emailToken') ?? '일시적 오류',
        },
        errorHandler: () =>
          alert('이메일 전송에 실패하였습니다. \n 다시 시도 해주세요.'),
      });
      timerRef.current && clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        sessionStorage.removeItem('emailToken');
        setEmailToken(null);
      }, time);
    }
  }, [name, email, emailToken]);

  const emailCheckHandler = type => {
    const TokenTrue = emailToken === true;

    if (TokenTrue) {
      setEmailAble(true);
      setEmailCertification(
        '이메일 인증 처리가 완료되었습니다. 다음을 클릭해 주세요.',
      );
    } else if (type === 'SEND' && emailToken !== true) {
      setEmailValue(email);
      sessionStorage.setItem('emailToken', randomEmailToken);
      sendTokenHandler();
      setEmailToken(storageToken);
      setEmailCertification(emailDefaultMessage);
      return;
    } else {
      if (emailToken ?? false) {
        sessionStorage.setItem('emailToken', 'ok');
        setEmailAble(true);
        setEmailCertification('인증되었습니다.');
        setTimer(undefined);
      } else if (emailValue === email && emailCheck === TokenTrue) {
        setEmailAble(true);
        setEmailCertification('이미 인증되었습니다. 다음을 눌러주세요.');
      } else {
        setEmailAble(false);
        setEmailCertification('인증번호가 틀렸습니다. 다시 확인해 주세요.');
      }
    }
  };

  useEffect(() => {
    storageToken === 'ok' || emailToken === 'ok' || emailToken === true
      ? timerRef.current && clearTimeout(timerRef.current)
      : setEmailToken(storageToken);
  }, [storageToken]);

  return {
    timerRef,
    emailToken,
    setEmailToken,
    emailDuplicate,
    emailAble,
    emailCheckHandler,
    timer,
    setTimer,
    emailCertification,
    emailDefaultMessage,
  };
};

export default useEmailToken;
