import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;

/* 사용자가 요청하는 주소에 따라 다른 컴포넌트를 보여줘보겠습니다. 
이 작업을 할 때에는 Route 라는 컴포넌트를 사용합니다.

사용 방식은 다음과 같습니다:

<Route path="주소규칙" component={보여주고싶은 컴포넌트}>

한번 App.js 에서 기존 코드들을 날리고, Route 들을 렌더링해주겠습니다. */
