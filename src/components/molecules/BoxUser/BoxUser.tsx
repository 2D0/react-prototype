import React from 'react';
import { TypeUser } from 'interface';

//이미지
import noFace from 'src/assets/images/icons/ico-noimg.svg';

//스타일
import { BoxUserWrap, BoxUserContent } from './BoxUser.style';

//컴포넌트
import { BlockImage, TextDefault } from 'src/components/atoms';

const BoxUser = ({ boxUserData }: { boxUserData: TypeUser }) => {
  const { userImage, userInfo } = boxUserData;

  return (
    <BoxUserWrap>
      <BoxUserContent>
        <BlockImage blockImageData={{ img: userImage, errorImg: noFace }} />
        <ul>
          {Array.isArray(userInfo) &&
            userInfo.map((item, index) => (
              <li key={item?.title ?? index}>
                <TextDefault textDefaultData={{ text: item?.title }} /> :&nbsp;
                <TextDefault textDefaultData={{ text: item?.content }} />
              </li>
            ))}
        </ul>
      </BoxUserContent>
    </BoxUserWrap>
  );
};
export default BoxUser;
