import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

function CounterContainer({ number, diff, increase, decrease, setDiff }) {
  return (
    <Counter
      // 상태와
      number={number}
      diff={diff}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
}

// mapStateToProps 는 리덕스 스토어의 상태를 조회해서 어떤 것들을 props 로 넣어줄지 정의합니다.
// 현재 리덕스 상태를 파라미터로 받아옵니다.
const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

// mapDispatchToProps가 함수가 아니라 객체면
// bindActionCreators 를 connect 에서 대신 해줍니다.
const mapDispatchToProps = {
  increase,
  decrease,
  setDiff,
};

// connect 함수에는 mapStateToProps, mapDispatchToProps 를 인자로 넣어주세요.
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

/* 위 코드는 다음과 동일합니다.
  const enhance = connect(mapStateToProps, mapDispatchToProps);
  export defualt enhance(CounterContainer);
*/
/* 
이번 튜토리얼에서는 리덕스에 대하여 알아보았습니다. 리덕스는 초반에 진입장벽이 조금 있긴 합니다. 지금 단계에서는 우리가 작은 프로젝트만 만들기 때문에 과연 유용한것인가 의심이 들 수도 있습니다만, 리덕스 사용에 적응이 되고, 프로젝트 규모가 커질수록 정말 편하다는것을 여러분들이 앞으로 리액트 개발을 하면서 점차 배워가실 것 입니다.

물론, 강의 초반부에서 언급했듯이 취향에 따라 리덕스가 맘에 들지 않을 수도 있습니다. 그럴 때는 Context API 만을 활용 또는 MobX 를 사용하시면 됩니다.

우리가 이번에 리덕스의 기초 사용법에 대하여 알아보았습니다. 우리가 지금까지 배운것만 따지고 보면 Context API의 글로벌 상태 관리와 크게 다를 것이 없습니다. 그냥 유용한 함수 및 Hook이 있는 정도의 차이지요.

다음 튜토리얼에서는 리덕스 미들웨어를 배워볼것입니다. 리덕스 미들웨어와 함께라면 일반 Context API와 비교했을때 아주 큰 차이점이 존재한답니다.
*/
