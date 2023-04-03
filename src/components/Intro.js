import React from "react";

const Intro = () => {
  return (
    <div className="explainContainer inner">
      <h1>주식 종목 추천 엔진</h1>
      <span className="explain">
        주식 종목 추천 엔진은 AI가 뉴스를 학습하고 내용에 부합하는 종목명을
        추천합니다.
        <br />
        동의어, 자회사에 대한 처리까지 진행하여 주식 종목을 추출합니다.
        <br />
        뉴스를 상장되어 있는 종목 중 하나로 분류하는 것이 아니기 때문에,
        <br />
        비상장 종목도 추출 가능합니다.
      </span>
    </div>
  );
};

export default Intro;
