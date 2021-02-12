import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
};

export default App;

/* 

만약에 만들게되는 서비스에서 특정 라우트 내에 
탭 같은것을 만들게 된다면, 단순히 state 로 관리하는 것 보다 
서브 라우트로 관리를 하는 것을 권장드립니다. 
그 이유는, setState 같은것을 할 필요도 없고, 
링크를 통하여 다른 곳에서 쉽게 진입 시킬 수도 있고, 
나중에 검색엔진 크롤링 까지 고려한다면, 
검색엔진 봇이 더욱 다양한 데이터를 수집해 갈 수 있기 때문입니다.
*/
