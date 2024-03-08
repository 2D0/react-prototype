type TypeUnit = `${number}rem` | `${number}%`;
export interface TypeDefault {
  textData: string | number;
  url: string;
  target: React.HTMLAttributeAnchorTarget;
  color: White | Black | LightGray | Gray | LightNavy | Navy | Blue;
  weight: 300 | 400 | 500 | 600;
  name: string;
  able: boolean;
  inputEvent: React.ChangeEvent<HTMLInputElement>;
  inputBlurEvent: React.ChangeEvent<HTMLInputElement>;
  buttonEvent: React.MouseEvent<HTMLButtonElement>;
  event: () => void;
  image: React.SFC<React.SVGProps<SVGSVGElement>> | string;
}
export interface TypeLink {
  url?: TypeDefault.url;
  target?: TypeDefault.target;
}
export interface TypeText extends TypeLink {
  text?: TypeDefault.textData;
  color?: TypeDefault.color;
  size?:
    | SizeDefaultSmallRem
    | SizeDefaultRem
    | SizeRegularRem
    | SizeMiddleRem
    | TypeUnit;
  weight?: TypeDefault.weight;
  family?: 'Nexon' | string;
  background?: TypeDefault.color;
}
export interface TypeTitle extends Pick<TypeText, 'text' | 'color' | 'family'> {
  type?: 'SUB' | 'MAIN';
}
export interface TypeImage {
  img?: TypeDefault.image;
  svg?: TypeDefault.image;
  color?: TypeDefault.color;
  errorImg?: TypeDefault.image | Boolean;
}
export interface TypeButton extends TypeLink {
  size?: SizeMiddleRem | SizeLargeRem | SizeExtraRem | TypeUnit;
  type?: React.ButtonHTMLAttributes.type | false;
  event?: TypeDefault.buttonEvent | TypeDefault.event;
  able?: React.ButtonHTMLAttributes.disabled;
  color?: TypeDefault.color;
  textData?: TypeText;
  imageData?: TypeImage;
}
export interface TypeInput {
  type?: HTMLInputTypeAttribute;
  title?: TypeDefault.textData;
  text?: TypeDefault.textData;
  placeholder?: TypeDefault.textData;
  name: TypeDefault.name;
  defaultValue?: TypeDefault.textData;
  event?: TypeDefault.inputEvent;
  blurEvent?: TypeDefault.inputBlurEvent;
  required?: boolean;
  errorMessage?: boolean;
  maxLength?: number;
  registerData?: RegisterOptions;
  visibleIcon?: boolean;
  buttonData?: TypeButton & { timer?: number | undefined };
  readOnly?: boolean;
}
export interface TypeInputCheck
  extends Omit<
    TypeInput,
    | 'type'
    | 'placeholder'
    | 'blurEvent'
    | 'buttonData'
    | 'visibleIcon'
    | 'readOnly'
    | 'rule'
    | 'maxLength'
  > {
  textData?: TypeText;
  able?: TypeDefault.able;
}
export interface TypeAxiosData {
  pathName?: string | undefined;
  valueName?: string;
  axiosUrl?: string;
}
export interface TypeAxiosUpdate extends Omit<TypeAxiosData, 'valueName'> {
  methodName: 'POST' | 'PATCH' | 'PUT' | 'DELETE';
}
export interface TypeAxios {
  dataValue?: {
    [key: string]: TypeDefault.text | TypeDefault.event | TypeDefault.able;
  };
  handlePathName?: string;
  navigateValue?: string;
  successHandler?: TypeDefault.event;
  errorHandler?: TypeDefault.event;
  paramsValue?: { [key: string]: any };
  headersValue?: { [key: string]: any } | any;
}
interface TypeFetchData {
  tableName: string;
  selectValue?: string;
  params?:
    | {
        name: string;
        value: string;
      }
    | undefined;
  successHandler?: (resData: any) => void;
  errorHandler?: (error: any) => void;
  valueName?: string;
}
interface TypeUpdateData extends Omit<TypeFetchData, 'params'> {
  methodName: string;
  updateValue: string | { [key: string]: any };
  primaryKey: string;
}
export type TypeFormInput = TypeInput & {
  buttonDefaultData?: TypeButton;
  message?: string;
  title?: TypeDefault.textData;
};
export interface TypeForm {
  name: string;
  data: TypeFormInput[];
  nameAble: boolean;
  selectData?: TypeFormInput;
  useFormMethod: Partial<UseFormReturn> | FormState;
  formEvent: {
    navigate?: string;
    event?: TypeDefault.event;
    data?: { [key: string]: any } | any;
  } & Partial<TypeAxiosData>;
  imageData?: Pick<TypeImage> & { buttonDefaultData: TypeButton };
  stepData: {
    name: string;
    data: TypeInput[];
  };
  agree?: {
    allCheck?: TypeInput;
    data: TypeInput[];
    buttonDefaultData: TypeButton;
  };
}
export interface TypeBoxImage {
  title?: string;
  name?: string;
  groupName?: string;
  index?: number;
  textData?: TypeText | TypeTitle;
  imageData: (TypeImage & TypeLink) | undefined;
  event?: TypeDefault.event;
}
export interface TypeUser {
  userImage: TypeImage | string;
  userInfo: Array<{
    title: string;
    content: string | [];
  }>;
}
export interface TypeGroup {
  createDate: string;
  listDesc: string;
  listIconUrl: string;
  listId: string;
  name: string;
  univsAccountId: string;
  vipCount: number;
  __v: number;
  _id: string;
}
export interface TypeFormTable {
  name?: string;
  imageData?: TypeImage & { button: boolean };
  defaultData: Partial<TypeForm>;
  addData?: Partial<TypeForm>;
  selectData?: TypeFormInput | TypeFormInput[];
}
export interface TypeModal {
  imageData?: TypeImage;
  titleData?: TypeText;
  textData?: TypeText;
  inputData?: TypeInput;
  buttonData?: TypeButton;
}
export interface TypeModalState {
  title?: string;
  content: React.ReactNode<any> | undefined;
  isModalOpen: boolean;
  modalButtonData?: TypeButton | TypeButton[];
}
export interface TypeList {
  limit?: number;
  page?: number;
  isLoading?: boolean;
  contentType: ({ contentData }: { contentData: any }) => JSX.Element;
  blockListData?: { [key: string]: any };
  blockListTable?:
    | any[]
    | Omit<TypeMatch, 'other' | 'index'>[]
    | TypeInput[]
    | TypeButton[];
}
export interface TypeContentList {
  contentType: React.FC | JSX.Element | ReactNode;
  contentListData?: { [key: string]: any };
  contentListTable?: TypeList.blockListTable;
  buttonDefaultData?: TypeButton;
}

export interface TypeFace {
  index: number;
  listId: string;
  profile: string;
  selectItem: number | undefined | SetStateAction<any>;
  company: string;
  email: string | [];
  lunaFaceData: [
    {
      face_id: string;
      url: string;
      external_url: string;
      sample_id: string;
    },
  ];
  additionalData: {
    residentRegistrationNumber: string;
  };
  image: string;
  lists: string | [];
  name: string;
  thumb: string;
  userName: string;
  orgName: string;
  orgId: string;
  language: string;
  orgAddress: string;
  birthday: string;
  position: string;
  tel: string;
  orgTel: string;
  uvFaceId: string;
  _id: string;
  createDate: string;
  __v: number;
  event: TypeDefault.event;
  selectIndex: number | undefined;
  setSelectIndex: SetStateAction<number | undefined>;
}
export interface TypeRelated {
  img: string;
  phone: string;
  relation: string;
  relationId: number;
  sampleId: string;
  vipId: string;
  groupName?: string;
  addButton?: boolean;
}
export interface TypeUserData {
  eventUserObjectId: string; // 자동생성
  eventUserEmail: string; // 사용자 아이디 (이메일)
  password: string; // 비밀번호
  socialType: string; // 소셜로그인 유형 (카카오, 구글 등)
  socialId: string; // 소셜로그인 아이디 (카톡 id_token 넣기)
  socialEmail: string; // 소셜로그인 이메일 (있는경우만)
  createTime: string; // 생성시간 (자동생성)
  isEmailActivate: boolean; // 이메일 액티베이션 확인
  emailActivateId: string; // 이메일 액티베이션 아이디
  name: string; // 이름
  phone: string; // 전화번호
  salt: string; //1차 salt key
  salt2: string; //2차 salt key
  salt2Time: string; // 2차 salt 발생시간
  orgId: string; // 기관 ID
  language: string; //사용언어
  relatedFaces: Partial<TypeFace>[] | TypeRelated[]; // 연관얼굴
}
