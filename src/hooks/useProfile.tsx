import React, { useCallback, useEffect, useState } from 'react';

//커스텀 훅
import { useModal, useUpdateData } from 'src/hooks';

//상태 관리
import { useRecoilState } from 'recoil';
import { userState } from 'src/state';
import { TextModal } from 'src/components/modals';

const useProfile = imageValue => {
  const { showModal } = useModal();
  const [isFile, setIsFile] = useState<any>(false);
  const [{ profile }, setUserState] = useRecoilState(userState);
  const postProfile = useUpdateData({
    methodName: 'POST',
    pathName: 'images',
  });

  const imageFileHandler = useCallback(
    event => {
      const file = event?.target?.files[0];
      const reader = new FileReader();

      if (file) {
        if (file.size > 1 * 1000 * 1000) {
          return showModal({
            content: (
              <TextModal
                modalData={{
                  textData: {
                    text: '1MB 이하로 등록해 주세요.',
                  },
                }}
              />
            ),
          });
        } else if (
          !file.type.match('image/jpeg') &&
          !file.type.match('image/jpg') &&
          !file.type.match('image/png')
        ) {
          return showModal({
            content: (
              <TextModal
                modalData={{
                  textData: {
                    text: 'JPEG, JPG, PNG 이미지만 업로드할 수 있습니다.',
                  },
                }}
              />
            ),
          });
        }

        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setIsFile(true);

          const imageData = new FormData();
          imageData.append('image', file);

          postProfile({
            dataValue: imageData,
            successHandler: resolve =>
              setUserState(prevState => ({
                ...prevState,
                profile: reader.result,
                sample_id: resolve.data?.lunaFaceData[0]?.sample_id,
                vipId: resolve.data?.vipId,
              })),
            errorHandler: () =>
              setUserState(prevState => ({
                ...prevState,
                profile: reader.result,
              })),
          });
        };
      }
    },
    [profile],
  );
  const clearButtonHandler = () => {
    setUserState({ profile: undefined });
    setIsFile(false);
  };

  useEffect(() => {
    imageValue && setUserState({ profile: imageValue });
  }, [imageValue]);

  return {
    isFile,
    clearButtonHandler,
    imageFileHandler,
  };
};

export default useProfile;
