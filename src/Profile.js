/* 파라미터와 쿼리

페이지 주소를 정의 할 때, 
우리는 유동적인 값을 전달해야 할 때도 있습니다. 
이는 파라미터와 쿼리로 나뉘어질 수 있는데요:

파라미터: /profiles/velopert
쿼리: /about?details=true

이것을 사용하는것에 대하여 무조건 따라야 하는 규칙은 없지만, 
일반적으로는 파라미터는 특정 id 나 이름을 가지고 조회를 할 때 사용하고,
쿼리의 경우엔 어떤 키워드를 검색하거나, 
요청을 할 때 필요한 옵션을 전달 할 때 사용됩니다.

*/

/* URL Params */

/* Profile 페이지에서 파라미터를 사용해봅시다.

/profile/velopert 이런식으로 뒷부분에 username 을 넣어줄 때 
해당 값을 파라미터로 받아와보겠습니다.

Profile 이라는 컴포넌트를 만들어서 파라미터를 받아오는 
예제 코드를 작성해보겠습니다.

*/

import React from "react";

// 프로필에서 사용 할 데이터
const profileData = {
  velopert: {
    name: "김동민",
    description:
      "Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "전래동화의 주인공",
  },
};

const Profile = ({ match }) => {
  // 파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다.
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;

/* 
파라미터를 받아올 땐 match 안에 들어있는 params 값을 참조합니다. 
match 객체안에는 현재의 주소가 Route 컴포넌트에서 
정한 규칙과 어떻게 일치하는지에 대한 정보가 들어있습니다.

이제 Profile 을 App 에서 적용해볼건데요, 
path 규칙에는 /profiles/:username 이라고 넣어주면 
username 에 해당하는 값을 파라미터로 넣어주어서 
Profile 컴포넌트에서 match props 를 통하여 전달받을 수 있게 됩니다.

*/
