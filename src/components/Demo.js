import React, { useState } from "react";
import { Pie } from "@ant-design/plots";
import CircularProgress from "@mui/material/CircularProgress";
import { sentence } from "./sentence";

const Demo = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [companys, setCompanys] = useState({})
  const data = [
    {
      stock: "한솔케미칼", // 회사이름
      score: 0.7434849143028259, //결과수치
      logit: 21.69752311706543, //뉴스와 회사명의 밀접도
    },
    {
      stock: "SK",
      score: 0.24532733857631683,
      logit: 20.588768005371094,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "score",
    colorField: "stock",
    legend: false,
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: `{name} {percentage}`,
      autoRotate: false,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  //색깔 선택
  const colorPicker = (companyName) => {
    //hasOwnProperty로 key 값 있나 확인
    if(companys.hasOwnProperty(companyName)){

    } else {
      const colorA = Math.floor(Math.random() * 256 )
      const colorB = Math.floor(Math.random() * 256 )
      const colorC = Math.floor(Math.random() * 256 )
      //동적으로 key 값을 할당
      setCompanys({...companys, [companyName]: `rgb( ${colorA}, ${colorB}, ${colorC})`})
    }
    return companys[companyName]
  }

  const text = `SK증권은 한솔케미칼에 대해 올해와 내년 연결 영업이익 전망치 하향이 예상된다며 투자의견은 '매수'를 유지했으나 목표주가는
  28만원으로 15% 하향했다.한동희 SK증권 연구원은 24일 "3분기 실적 부진과 내년 업황 둔화를 감안해 한솔케미칼의 올해와 내년
  연결 영업이익 전망치를 각각 12%, 13% 하향 조정한다"고 말했다. 앞서 한솔케미칼의 3분기 연결 실적은 매출 2160억원, 영업이익
  457억원으로 시장컨센서스를 각각 6%, 16% 하회했다. 당초 3분기 TV 등 성수기 진입 효과에 따른 퀀텀닷(QD) 소재 회복을
  예상했으나 글로벌 경기 위축에 따른 전방 재고 조정으로 QD 소재 및 테이팩스의 스마트폰향 판매 부진, 천연가스 및 유가 등 원재료
  가격 상승 영향으로 과산화수소의 수익성이 하락한 영향으로 추정된다.올해 4분기 연결 실적은 매출 2355억원, 영업이익
  353억원으로 예상된다. QD 소재는 전방 재고조정 일단락 효과에 따른 회복, 과산화수소는 원재료 가격 상승분의 판가 전가로
  수익성이 회복되기 시작할 것으로 전망된다.`;

  return (
    <div style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <div className="demoContainer ">
        <h3 className="title">지금 원하는 뉴스의 종목명을 추출해보세요!</h3>
        <div className="inputArea inner">
          <div className="keywordBtnWrapper">
            <div className="keywordBtnList">
              <div></div>
              <span>
                <strong>샘플 뉴스</strong>
              </span>
              <span className="keywordBtn ">카카오</span>
              <span className="keywordBtn click ">화장품</span>
              <span className="keywordBtn ">삼성</span>
              <span className="keywordBtn ">스마트폰</span>
            </div>
          </div>
          <div className="inputWrapper">
            <div>
              <div>
                <input
                  aria-invalid="false"
                  id="inputTitle"
                  placeholder="뉴스 제목"
                  type="text"
                  value='"한솔케미칼, 올해·내년 영업이익 전망치 하향에 목표가↓"-SK'
                />
              </div>
            </div>
            <div>
              <div>
                <textarea
                  rows="12"
                  aria-invalid="false"
                  id="inputContext"
                  placeholder="뉴스 본문"
                  style={{ height: " 276px" }}
                  value={text}
                ></textarea>
              </div>
            </div>
          </div>
          <button
            className="analysisBtn"
            tabIndex="0"
            type="button"
            onClick={handleClick}
          >
            종목명 추출하기
          </button>
        </div>
        <div style={{ backgroundColor: "rgb(247, 249, 251)" }}>
          <div className="resultArea inner">
            <div className="resultSection1">
              <p className="title">분석결과</p>
              {IsLoading ? (
                <CircularProgress />
              ) : (
                <div className="visualization">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="chartExplain">
                      <p className="subtitle result">Result</p>
                      <p
                        style={{
                          marginTop: "24px",
                          height: "19px",
                          fontWeight: "bold",
                        }}
                      >
                        <span
                          style={{
                            marginTop: "0px",
                            fontSize: "30px",
                            verticalAlign: "sub",
                            color: "rgb(99, 149, 249)",
                          }}
                        >
                          {" "}
                          •{" "}
                        </span>
                        한솔케미칼
                      </p>
                      <p className="subtitle list">List</p>
                      <p
                        style={{
                          marginTop: "24px",
                          height: "19px",
                          fontWeight: "bold",
                          color: "rgb(99, 149, 249)",
                        }}
                      >
                        <span
                          style={{
                            marginTop: "0px",
                            fontSize: "30px",
                            verticalAlign: "sub",
                            color: "rgb(99, 149, 249)",
                          }}
                        >
                          {" "}
                          •{" "}
                        </span>
                        한솔케미칼 74%
                      </p>
                      <p
                        style={{
                          marginTop: "24px",
                          height: "19px",
                          fontWeight: "bold",
                          color: "rgb(98, 218, 171)",
                        }}
                      >
                        <span
                          style={{
                            marginTop: "0px",
                            fontSize: "30px",
                            verticalAlign: "sub",
                            color: "rgb(98, 218, 171)",
                          }}
                        >
                          {" "}
                          •{" "}
                        </span>
                        SK 24%
                      </p>
                    </div>
                    <div className="chart">
                      <Pie {...config} />
                    </div>
                    <div className="detailExplain">
                      <p
                        className="subtitle result"
                        style={{ textAlign: "left" }}
                      >
                        세부 분석결과
                      </p>
                      <div>
                        <p
                          style={{
                            marginTop: "24px",
                            height: "19px",
                            fontWeight: "bold",
                            width: "130px",
                          }}
                        >
                          <span
                            style={{
                              marginTop: "-20px",
                              fontSize: "30px",
                              verticalAlign: "sub",
                              color: "rgb(99, 149, 249)",
                            }}
                          >
                            {" "}
                            •{" "}
                          </span>
                          한솔케미칼
                        </p>
                        <p style={{ width: "270px" }}>
                          "Score": 0.7434849143028259
                          <br /> "Logit": 21.697523117065
                        </p>
                      </div>
                      <div>
                        <p
                          style={{
                            marginTop: "0px",
                            height: "19px",
                            fontWeight: "bold",
                            width: "130px",
                          }}
                        >
                          <span
                            style={{
                              marginTop: "-20px",
                              fontSize: "30px",
                              verticalAlign: "sub",
                              color: "rgb(98, 218, 171)",
                            }}
                          >
                            {" "}
                            •{" "}
                          </span>
                          SK
                        </p>
                        <p style={{ width: "270px" }}>
                          "Score": 0.24532733857631683
                          <br /> "Logit": 20.588768005371
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="resultSection2">
              <p className="title">Sentence 분석</p>
              {IsLoading ? (
                <CircularProgress />
              ) : (
              <div className="visualization">
                <div
                  className="sentenceReport2"
                  style={{ backgroundColor: "rgba(101, 119, 152, 0.15)" }}
                >
                  <p className="sentence">{sentence[0].sentence}</p>
                  <p className="percent">
                    <span>
                      {sentence[0].condition[0].stock}&nbsp;&nbsp;&nbsp;
                    </span>
                    <span
                      style={{
                        color: "rgb(101, 119, 152)",
                        fontWeight: "bold",
                        opacity: "1",
                      }}
                    >
                      {sentence[0].condition[0].score.toFixed(2) * 100}%
                    </span>
                  </p>
                </div>
                <div
                  className="sentenceReport2"
                  style={{ backgroundColor: "rgba(98, 218, 171, 0.15)" }}
                >
                  <p className="sentence">{sentence[1].sentence}</p>
                  <p className="percent">
                    <span>
                      {sentence[1].condition[0].stock}&nbsp;&nbsp;&nbsp;
                    </span>
                    <span
                      style={{
                        color: "rgb(98, 218, 171)",
                        fontWeight: "bold",
                        opacity: "1",
                      }}
                    >
                      {sentence[1].condition[0].score.toFixed(2) * 100}%
                    </span>
                  </p>
                </div>
                <div
                  className="sentenceReport2"
                  style={{ backgroundColor: colorPicker("삼성") }}
                >
                  <p className="sentence">{sentence[2].sentence}</p>
                  <p className="percent">
                    <span>
                      {sentence[2].condition[0].stock}&nbsp;&nbsp;&nbsp;
                    </span>
                    <span
                      style={{
                        color: "rgb(99, 149, 249)",
                        fontWeight: "bold",
                        opacity: "1",
                      }}
                    >
                      {sentence[2].condition[0].score.toFixed(2) * 100}%
                    </span>
                  </p>
                </div>
                <div
                  className="sentenceReport2"
                  style={{ backgroundColor: colorPicker("하이닉스") }}
                >
                  <p className="sentence">{sentence[3].sentence}</p>
                  <p className="percent">
                    <span>없음</span>
                  </p>
                </div>
                <div
                  className="sentenceReport2"
                  style={{ backgroundColor: colorPicker("하이닉스") }}
                >
                  <p className="sentence">{sentence[4].sentence}</p>
                  <p className="percent">
                    <span>없음</span>
                  </p>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
