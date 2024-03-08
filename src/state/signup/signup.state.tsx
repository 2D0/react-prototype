import { atom, RecoilState } from 'recoil';

//로그인 유무
export const agreeState: RecoilState<{ [key: string]: string }> = atom({
  key: 'agreeContents',
  default: {
    agreePersonalInfo:
      '본 서비스는 회원가입 과정에서 아래의 개인정보를 수집하며, 수집된 정보는 회원 관리, 서비스 제공 및 개선 등을 위해 사용됩니다.\n' +
      '수집 항목: 이름, 이메일 주소, 비밀번호, 생년월일, 연락처\n\n' +
      '보유 및 이용 기간: 회원 탈퇴 시까지',
    agreePhotoUse:
      '본 서비스는 회원의 얼굴 사진을 수집하여 다른 연예인과의 유사도 비교 서비스를 제공합니다.\n' +
      '수집 목적: 얼굴 인식을 통한 연예인 유사도 비교\n\n' +
      '보유 및 이용 기간: 회원 탈퇴 시까지',
    agreeServiceForProfit:
      '본 서비스는 회원의 얼굴 사진을 기반으로 하는 영리 목적의 서비스를 제공할 수 있습니다.\n' +
      '이용 목적: 광고, 마케팅 및 개인화된 서비스 제공\n\n' +
      '보유 및 이용 기간: 회원 탈퇴 시까지',
    agreeServiceTerms:
      '본 서비스 이용을 위해서는 서비스 이용약관에 동의해야 합니다.\n\n' +
      '이용약관 전문은 이곳에서 확인하실 수 있습니다.',
    agreeMarketing:
      '본 서비스의 신규 기능, 이벤트, 프로모션 등의 마케팅 정보를 이메일을 통해 수신하실 수 있습니다. (선택사항)\n' +
      '수신 동의 시 수집 정보: 이메일 주소\n\n' +
      '보유 및 이용 기간: 동의 철회 시까지',
    agreeDataProcessing:
      '개인정보 처리 위탁 동의\n' +
      '본 서비스는 원활한 서비스 제공을 위해 필요한 범위 내에서 개인정보 처리 업무를 외부 업체에 위탁할 수 있습니다.\n\n' +
      '위탁 업무 내용 및 수탁자: [위탁 내용 및 수탁자 명시]',
  },
});

export const signUpUserState: RecoilState<any> = atom({
  key: 'signUpUser',
  default: undefined,
});
