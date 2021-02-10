import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

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
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default App;

/* 
/profiles/velopert 경로로 직접 입력하여 들어가보세요. 
우리가 사전에 입력한 데이터들이 잘 나타나나요? 
*/
