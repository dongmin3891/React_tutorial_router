import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

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
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;

/* 
Link 컴포넌트는 클릭하면 다른 주소로 이동시키는 컴포넌트입니다.
 리액트 라우터를 사용할땐 일반 <a href="...">...</a> 태그를 사용하시면 안됩니다. 
 만약에 하신다면 onClick 에 e.preventDefault() 를 호출하고 
 따로 자바스크립트로 주소를 변환시켜주어야 합니다.

그 대신에 Link 라는 컴포넌트를 사용해야하는데요, 
그 이유는 a 태그의 기본적인 속성은 페이지를 이동시키면서,
페이지를 아예 새로 불러오게됩니다. 
그렇게 되면서 우리 리액트 앱이 지니고있는 상태들도 초기화되고, 
렌더링된 컴포넌트도 모두 사라지고 새로 렌더링을 하게됩니다. 
그렇기 때문에 a 태그 대신에 Link 컴포넌트를 사용하는데요,
 이 컴포넌트는 HTML5 History API 를 사용하여 
 브라우저의 주소만 바꿀뿐 페이지를 새로 불러오지는 않습니다.
*/
