import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { Img } from "../Resources/img";
import colors from "../Resources/constants/colors";
import { getData } from "../api/get";
import { useHistory } from "react-router-dom";
function Mypage() {
  const History = useHistory();
  const { t } = useTranslation();
  const [welcome, setwelcome] = useState({
    kor: "안녕하세요 webfront개발자가 되기위해 노력하는 유명환이라고 합니다! 현제 react를 주력으로 하고 있고 node.js를 열심히 공부하고 있습니다.",
    eng: "",
  });
  const [skills, setSkills] = useState([
    {
      id: 0,
      text: "React-redux,mobx",
    },
    {
      id: 1,
      text: "React-redux,mobx",
    },
    {
      id: 2,
      text: "React-redux,mobx",
    },
  ]);
  const [portfolio, setPortfolio] = useState([
    {
      id: 0,
      text: "plantPlan (2020)",
    },
    {
      id: 0,
      text: "connecText (2020)",
    },
  ]);
  const [otherinformation, setotherinformation] = useState([
    {
      id: 0,
      text: "umh0811@naver.com",
      adds:"",
    },
    {
      id: 1,
      text: "카카오톡 아이디: umh0811",
      adds:"",
    },
    {
      id: 2,
      text: "Github",
      adds: "https://github.com/famous0811"
    },
    {
      id: 3,
      text: "blog",
      adds: "https://allblack0811.tistory.com/"
    },
  ]);

  useEffect(() => {
    getData()
      .GetInterduce()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <Wrap>
        <Interduce>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <img
                src={Img.umh1}
                alt="사진"
                style={{
                  maxWidth: "250px",
                  maxHeight: "300px",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <Profile>
              <div className="name">{t("name")}</div>
              <div className="nickname">{t("nickname")}</div>
              <div className="contents">2003.08.11</div>
              <div className="contents">{t("company")}</div>
              {otherinformation.map((data) => (
                <div key={data.id} className="contents" onClick={()=>{return data.adds!=="" ? window.location.href =data.adds : ""}} style={{cursor:"pointer"}}>
                  {data.text}
                </div>
              ))}
            </Profile>
          </div>
          <Title>
            {t("welcome1")}
            <b style={{ color: colors.primarybold }}>{t("welcome2")}</b>
            {t("welcome3")}
          </Title>
        </Interduce>
        <Maincontents>
          <div className="Main">
            <div className="project">
              <h1>{t("project")}</h1>
              <ul>
                {portfolio.map((data) => (
                  <li key={data.id}>{data.text}</li>
                ))}
              </ul>
            </div>
            <div className="skills">
              <h1>{t("skills")}</h1>
              <ul>
                {skills.map((data) => (
                  <li key={data.id}>{data.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="interduce">
            <div className="title">{t("interduce")}</div>
            <div className="content">
              {welcome.kor}
            </div>
          </div>
        </Maincontents>
        <ReviseButton>
          <div onClick={() => History.replace("/adminwritemypages")}>✍</div>
        </ReviseButton>
      </Wrap>
    </Layout>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
`;
const Maincontents = styled.div`
  @font-face {
    font-family: "GmarketSansBold";
    src: url("../Resources/fonts/GmarketSansBold.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("../Resources/fonts/GmarketSansMedium.otf") format("truetype");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "GmarketSansLight";
    src: url("../Resources/fonts/GmarketSansLight.otf") format("truetype");
    font-style: normal;
    font-weight: normal;
  }
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > div {
    height: 100%;
  }
  & > .interduce {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    & > .title {
      padding-top: 50px;
      font-size: 25px;
      font-weight: 700;
      padding: 0 0 10px 0;
      font-family: "GmarketSansBold";
    }
    & > .content {
      font-family: "GmarketSansBold";
      font-size: 15px;
    }
  }
  & > .Main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    & > div > h1 {
      color: ${colors.primarybold};
      padding: 5px 0px;
    }
    & > .project {
    }
    &::after {
      position: absolute;
      right: 50%;
      top: 0;
      content: "";
      height: 80%;
      width: 1px;
      box-sizing: border-box;
      margin: 20px 0px;
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;
const Interduce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.primarymidle};
  width: 100%;
  max-width: 600px;
  height: 100%;
`;

const Title = styled.div`
  font-size: 31px;
  padding: 0px 50px;
  margin-top: 30px;
  font-family: "GmarketSansBold";
`;

const Profile = styled.div`
  margin-left: 40px;
  @font-face {
    font-family: "GmarketSansBold";
    src: url("../Resources/fonts/GmarketSansBold.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("../Resources/fonts/GmarketSansMedium.otf") format("truetype");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "GmarketSansLight";
    src: url("../Resources/fonts/GmarketSansLight.otf") format("truetype");
    font-style: normal;
    font-weight: normal;
  }
  & > .name {
    /* @import url("../Resources/fonts/GmarketSansBold.otf"); */
    font-family: "GmarketSansBold";
    font-weight: 1000;
    /* font-family:url(${require("../Resources/fonts/GmarketSansBold.otf")}) format("truetype"); */
    font-size: 36px;
  }
  & > .nickname {
    font-family: "GmarketSansMedium";
    font-size: 20px;
  }
  & > .contents {
    font-family: "GmarketSansLight";
    font-size: 15px;
  }
`;
const ReviseButton = styled.div`
  position: fixed;
  bottom: 6%;
  right: 3%;
  cursor: pointer;
  background: gray;
  padding: 15px;
  border-radius: 50px;
`;
export default Mypage;
