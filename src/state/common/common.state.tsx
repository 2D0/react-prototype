import { atom, RecoilState } from 'recoil';
import { TypeButton } from 'interface';

//로그인 유무
export const loginState: RecoilState<any | undefined> = atom({
  key: 'isLogin',
  default: undefined,
});

//api 주소
export const apiUrlState: RecoilState<string> = atom({
  key: 'apiUrl',
  default: `${process.env.REACT_APP_API_URL}`,
});

export const headerState: RecoilState<{
  title?: string | undefined;
  leftText?: string | undefined;
  leftButton?: undefined | TypeButton | 'BACK';
  rightButton?: undefined | TypeButton | false;
}> = atom({
  key: 'title',
  default: {
    title: '',
    leftText: undefined,
    leftButton: undefined,
    rightButton: undefined,
  },
});

export const apiData: RecoilState<{
  image?: string | undefined;
  host?: undefined | TypeButton | 'BACK';
  rightButton?: undefined | TypeButton;
}> = atom({
  key: 'title',
  default: { image: '', leftButton: undefined, rightButton: undefined },
});
