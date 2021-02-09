import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      {/* <Route path="/" component={Home} />
      <Route path="/about" component={About} /> 
       
        /about 경로로 들어가면, 예상과 다르게 두 컴포넌트가 모두 보여집니다!
        이는 /about 경로가 / 규칙과도 일치하기 때문에 발생한 현상인데요, 
        이를 고치기 위해선 Home 을 위한 라우트에 exact 라는 props 를 true 로 설정하시면 됩니다.
      */}

      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      {/* 이렇게 하면 경로가 완벽히 똑같을때만 컴포넌트를 
          보여주게 되어 이슈가 해결됩니다. */}
    </div>
  );
};

export default App;

/* 사용자가 요청하는 주소에 따라 다른 컴포넌트를 보여줘보겠습니다. 
이 작업을 할 때에는 Route 라는 컴포넌트를 사용합니다.

사용 방식은 다음과 같습니다:

<Route path="주소규칙" component={보여주고싶은 컴포넌트}>

한번 App.js 에서 기존 코드들을 날리고, Route 들을 렌더링해주겠습니다. */
