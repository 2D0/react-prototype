import emailjs from 'emailjs-com';

const useSendEmail = () => {
  const sendEmail = ({
    serviceId,
    templateId,
    userKey,
    templateParams,
    successHandler,
    errorHandler,
  }: {
    serviceId: string;
    templateId: string;
    userKey: string;
    templateParams: {
      title_message: string;
      to_name: string;
      to_email: string;
      email_token?: string | number;
    };
    successHandler?: any;
    errorHandler?: any;
  }) => {
    emailjs
      .send(
        serviceId, // 서비스 ID
        templateId, // 템플릿 ID
        templateParams, //템플릿에 들어갈 변수
        userKey, // 사용자 Key
      )
      .then(resolve => {
        console.log('SUCCESS!', resolve.status, resolve.text);
        successHandler?.(resolve);
      })
      .catch(error => {
        console.log('FAILED...', error);
        errorHandler?.(error);
      });
  };

  return { sendEmail };
};

export default useSendEmail;
