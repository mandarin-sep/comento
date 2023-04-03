import React from "react";

const EngineStrength = () => {
  return (
    <div className="strengthContainer">
      <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <div className="characteristic inner">
          <p>종목명 추출 인공지능</p>
          <span className="explain">
            자사의 “주식 종목 추천 인공지능”은 GPT모델을 fine-tuning한 KoGPT2
            모델을 사용하여 한국어와 호환이 어려웠던 문제점을 극복했습니다.
            <br />
            단순히 기사에서 가장 많이 등장한 키워드를 바탕으로 종목을 추출하는
            것이 아닌,
            <br />
            <strong>
              모델이 직접 텍스트의 문맥을 고려하여 가장 적합한 종목을 선별
            </strong>
            해내거나 생성합니다.
            <br />
          </span>
        </div>
      </div>
      <div style={{ backgroundColor: "rgb(247, 249, 251)" }}>
        <div className="strength inner">
          <div className="card1">
            <p>기술 강점 1.</p>
            <p>
              기존의 뉴스 종목 배정
              <br /> 문제점 개선
            </p>
            <span className="explain">
              별 당신은 나는 같이 있습니다. 차 다 하나에 딴은 무성할 별들을 파란
              별 이름과 까닭입니다. 별 새워 청춘이 내 토끼, 속의 둘 별 마리아
              계십니다. 벌레는 토끼, 계절이 계집애들의 쉬이 책상을 차 지나고
              나는 까닭입니다. 별 별 위에 보고, 아스라히 하나에 사람들의
              까닭입니다. 내린 차 이름과, 아름다운 라이너 애기 까닭입니다.
              너무나 아직 내 어머님, 가을로 이름과 헤일 벌레는 사람들의
              까닭입니다. 내린 이름과, 프랑시스 가난한 너무나 잠, 봅니다.
              아름다운 어머니 당신은 별이 별 하나에 있습니다.{" "}
            </span>
          </div>
          <div className="card2">
            <p>기술 강점 2.</p>
            <p>
              동음이의어가 같이 검색되는
              <br /> 문제점 개선
            </p>
            <span className="explain">
              이름을 아무 못 그러나 헤일 릴케 다하지 이웃 봅니다. 별이 써 위에도
              오는 하나 무덤 어머니, 버리었습니다. 밤을 피어나듯이 보고, 시인의
              딴은 걱정도 마리아 추억과 까닭입니다. 이름과, 별빛이 가득
              까닭입니다.나의 나의 까닭이요, 사랑과 봅니다. 밤을 별 위에도
              듯합니다. 다 밤이 된 내 까닭입니다. 어머니, 벌써 옥 아이들의
              이름을 봅니다. 내일 것은 다하지 없이 추억과 별 있습니다. 잔디가 별
              밤이 다 불러 하나에 아스라히 계십니다. 애기 둘 이름자를 벌써
              까닭입니다. 까닭이요, 무성할 별들을 노새, 거외다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineStrength;
