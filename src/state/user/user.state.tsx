import { atom, RecoilState } from 'recoil';
import { Address } from 'react-daum-postcode/lib/loadPostcode';

//주소
export const addressState: RecoilState<Partial<Address> | undefined> = atom({
  key: 'address',
  default: undefined,
});

//유저 프로필
export const profileState: RecoilState<string | any | undefined> = atom({
  key: 'userProfile',
  default: undefined,
});

export const userListState: RecoilState<{
  data?: any | undefined;
  prams?: string | undefined;
}> = atom({
  key: 'userList',
  default: { data: [], prams: undefined },
});

export const userState: RecoilState<{
  uvFaceId?: string;
  image?: string | any | undefined;
  profile?: string | any | undefined;
  name?: string;
  tel?: string;
  company?: string;
  position?: string;
  birthDate?: string;
  birthday?: string;
  language?: string;
  thumb?: string;
  email?: string;
  groupName?: string;
  userName?: string;
  phone?: string;
  index?: number;
  relation?: string | [];
  sample_id?: string;
  vipId?: string;
}> = atom({
  key: 'user',
  default: {
    birthDate: undefined,
    birthday: undefined,
    language: undefined,
    image: undefined,
    thumb: undefined,
    email: undefined,
    userName: undefined,
    uvFaceId: undefined,
    profile: undefined,
    name: undefined,
    tel: undefined,
    company: undefined,
    position: undefined,
    phone: undefined,
    sample_id: undefined,
    vipId: undefined,
  },
});
