/* Query */

/* 
이번엔 About 페이지에서 쿼리를 받아오겠습니다. 
쿼리는 라우트 컴포넌트에게 props 전달되는 
location 객체에 있는 search 값에서 읽어올 수 있습니다. 
location 객체는 현재 앱이 갖고있는 주소에 대한 정보를 지니고있습니다.
*/

/* 
이런식으로 말이죠:

{
  key: 'ac3df4', // not with HashHistory!
  pathname: '/somewhere'
  search: '?some=search-string',
  hash: '#howdy',
  state: {
    [userDefined]: true
  }
}
여기서 search 값을 확인해야하는데, 이 값은 문자열 형태로 되어있습니다. 객체 형태로 변환하는건 우리가 직접 해주어야 합니다.

이 작업은 qs 라는 라이브러리를 사용하여 쉽게 할 수 있습니다.

이 라이브러리를 설치해주세요:
yarn add qs
*/

/* 
 About 컴포넌트에서 search 값에있는 detail 값을 받아와서, 
 해당 값이 true 일때 추가정보를 보여주도록 구현을 해보겠습니다.
*/

import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === "true"; // 쿼리의 파싱결과값은 문자열입니다.

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트랍니다.</p>
      {detail && <p>추가적인 정보가 어쩌고 저쩌고..</p>}
    </div>
  );
};

export default About;

/* 
/about?detail=true 경로에 한번 들어가보세요. 
추가정보가 잘 나타나나요? 
*/
