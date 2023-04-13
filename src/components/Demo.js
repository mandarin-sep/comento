import React, { useState } from "react";
import { Pie } from "@ant-design/plots";
import CircularProgress from "@mui/material/CircularProgress";
import sampleNews from "../assets/sentence";
import { getResult } from "../apis/stocks_api";

const Demo = () => {
  const [IsLoading, setIsLoading] = useState(false);
  const [companys, setCompanys] = useState({ "": "0, 0, 0" });
  const [nothing, setNothing] = useState(true);
  const [index, setIndex] = useState();
  const [result, setResult] = useState({});
  const [sampleCliked, setSampledClicked] = useState(false);

  const data = result.answer;

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
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (!user) {
      window.alert("회원전용 서비스 입니다.");
      return;
    }

    if (!sampleCliked) {
      window.alert("추출할 뉴스가 선택되지않았습니다");
      return;
    }

    setIsLoading(true);

    getResult(index, setResult);

    setTimeout(() => {
      setIsLoading(false);
      setNothing(false);
    }, 2000);
  };

  const indexClick = (e) => {
    setIndex(e.target.id);
    setSampledClicked(true);
  };

  //색깔 선택
  const colorPicker = (companyName, isBgc = false) => {
    //hasOwnProperty로 key 값 있나 확인
    if (companys.hasOwnProperty(companyName)) {
    } else {
      const colorA = Math.floor(Math.random() * 256);
      const colorB = Math.floor(Math.random() * 256);
      const colorC = Math.floor(Math.random() * 256);

      //동적으로 key 값을 할당
      setCompanys({
        ...companys,
        [companyName]: `${colorA}, ${colorB}, ${colorC}`,
      });
    }

    if (isBgc) {
      return `rgba(${companys[companyName]}, 0.15)`;
    }

    return `rgb(${companys[companyName]})`;
  };

  const Nothing = () => {
    return (
      <div
        style={{
          color: "rgb(181,181,181)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        뉴스를 입력하고 결과를 확인하세요
      </div>
    );
  };

  const SentenceFunc = (item) => {
    let stockPercent = Number.MIN_SAFE_INTEGER;
    let stockName = "";

    item.condition.forEach((cond) => {
      const now = Number((cond.score.toFixed(2) * 100).toFixed(0));
      stockPercent = Math.max(now, stockPercent);
      if (now === stockPercent) {
        stockName = cond.stock;
      }
    });

    return (
      <div
        className="sentenceReport2"
        style={{ backgroundColor: colorPicker(stockName, true) }}
      >
        <p className="sentence">{item.sentence}</p>
        <p className="percent">
          <span>{stockName}&nbsp;&nbsp;&nbsp;</span>
          <span
            style={{
              color: colorPicker(stockName),
              fontWeight: "bold",
              opacity: "1",
            }}
          >
            {item.condition.length === 0 ? "없음" : `${stockPercent}%`}
          </span>
        </p>
      </div>
    );
  };

  const DetailAnalyze = (answer) => {
    return (
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
              color: colorPicker(answer.stock),
            }}
          >
            {" "}
            •{" "}
          </span>
          {answer.stock}
        </p>
        <p style={{ width: "270px" }}>
          "Score": {answer.score}
          <br /> "Logit": {answer.logit}
        </p>
      </div>
    );
  };

  const ListName = (answer) => {
    return (
      <p
        style={{
          marginTop: "24px",
          height: "19px",
          fontWeight: "bold",
          color: colorPicker(answer.stock),
        }}
      >
        <span
          style={{
            marginTop: "0px",
            fontSize: "30px",
            verticalAlign: "sub",
            color: colorPicker(answer.stock),
          }}
        >
          {" "}
          •{" "}
        </span>
        {answer.stock} {(answer.score.toFixed(2) * 100).toFixed(0)}%
      </p>
    );
  };

  const ResultName = () => {
    let name;
    let max = Number.MIN_SAFE_INTEGER;

    result.answer.forEach((answer) => {
      const now = Number((answer.score.toFixed(2) * 100).toFixed(0));
      max = Math.max(now, max);
      if (now === max) {
        name = answer.stock;
      }
    });

    return name;
  };

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
              <span id={0} className="keywordBtn" onClick={indexClick}>
                카카오
              </span>
              <span id={1} className="keywordBtn" onClick={indexClick}>
                화장품
              </span>
              <span id={2} className="keywordBtn" onClick={indexClick}>
                삼성
              </span>
              <span id={3} className="keywordBtn" onClick={indexClick}>
                스마트폰
              </span>
            </div>
          </div>
          <div className="inputWrapper">
            {sampleCliked ? (
              <>
                <div>
                  <div>
                    <input
                      aria-invalid="false"
                      id="inputTitle"
                      placeholder="뉴스 제목"
                      type="text"
                      value={sampleNews[index].query}
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
                      value={sampleNews[index].context}
                    ></textarea>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div id="inputTitle">뉴스 제목</div>
                <div id="inputContext">뉴스 본문</div>
              </>
            )}
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
                  {nothing ? (
                    <Nothing />
                  ) : (
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
                              color: colorPicker(ResultName()),
                            }}
                          >
                            {" "}
                            •{" "}
                          </span>
                          {ResultName()}
                        </p>
                        <p className="subtitle list">List</p>
                        {result.answer.map(ListName)}
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
                        <>{result.answer.map(DetailAnalyze)}</>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="resultSection2">
              <p className="title">Sentence 분석</p>
              {IsLoading ? (
                <CircularProgress />
              ) : (
                <div className="visualization">
                  {nothing ? (
                    <Nothing />
                  ) : (
                    <>{result.sentence.map(SentenceFunc)}</>
                  )}
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
