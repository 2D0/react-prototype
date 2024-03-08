import React, { useEffect } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { TypeInput } from 'interface';

//커스텀 훅
import { useProfile } from 'src/hooks';

//상태 관리
import { useRecoilState } from 'recoil';
import { userState } from 'src/state';

//이미지
import noFace from 'src/assets/images/icons/ico-noimg2.svg';

//스타일
import {
  A11yHidden,
  LightGray,
  Red,
  SizeDefaultSmallRem,
} from 'src/styles/Common.style';
import { BoxFileWrap, BoxFileContent, BoxFileAdd } from './BoxFile.style';

//컴포넌트
import { BlockImage, TextDefault } from 'src/components/atoms';
import { FormState, UseFormReturn } from 'react-hook-form/dist/types/form';

const BoxFile = ({
  contentData,
}: {
  contentData: Partial<TypeInput> &
    Partial<UseFormReturn> &
    Partial<FormState<any>> & {
      button: boolean;
    };
}) => {
  const { _userId } = useParams();
  const [{ profile }, setUserState] = useRecoilState(userState);
  const { button, control, name, registerData, errors, defaultValue } =
    contentData;
  const { clearButtonHandler, imageFileHandler } = useProfile(defaultValue);

  useEffect(() => {
    setUserState(prevState => ({
      ...prevState,
      profile: _userId ? defaultValue : undefined,
    }));
  }, []);

  return (
    <BoxFileWrap>
      {profile ? (
        <BoxFileContent>
          {button && (
            <button type="button" onClick={clearButtonHandler}>
              <i></i>
              <A11yHidden>닫기</A11yHidden>
            </button>
          )}
          <BlockImage
            blockImageData={{ img: profile ?? defaultValue, errorImg: noFace }}
          />
        </BoxFileContent>
      ) : (
        <Controller
          name={name}
          control={control}
          rules={registerData}
          render={({ field }) => (
            <>
              <BoxFileAdd>
                <input
                  {...field}
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={imageFileHandler}
                />
                {button && (
                  <div>
                    <i></i>
                    <A11yHidden>사진등록</A11yHidden>
                  </div>
                )}
                <ErrorMessage
                  errors={errors}
                  name={name}
                  render={({ message }) => (
                    <TextDefault
                      textDefaultData={{
                        text: message ?? '',
                        size: SizeDefaultSmallRem,
                        weight: 400,
                        color: Red,
                        background: LightGray,
                      }}
                    />
                  )}
                />
              </BoxFileAdd>
            </>
          )}
        />
      )}
    </BoxFileWrap>
  );
};
export default BoxFile;
