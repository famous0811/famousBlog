import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { Img } from "../Resources/img";
import colors from "../Resources/constants/colors";
import { getData } from "../api/get";
function Mypage() {
  const { t } = useTranslation();
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
  const [Contacts, setContacts] = useState([
    {
      id: 0,
      text: "umh0811@naver.com",
    },
    {
      id: 1,
      text: "yum969315@gmail.com",
    },
    {
      id: 2,
      text: "카카오톡 아이디: umh0811",
    },
  ]);
  const [otherinformation, setotherinformation] = useState([
    {
      id: 0,
      text: "https://github.com/famous0811",
    },
    {
      id: 1,
      text: "allblack0811.tistory.com",
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
              <div className="name">유명환</div>
              <div className="nickname">Allblack</div>
              <div className="contents">2003.08.11</div>
              <div className="contents">010-8504-0811</div>
              <div className="contents">umh0811@naver.com</div>
              <div className="contents">선린인터넷 고등학교 제학</div>
            </Profile>
          </div>
          <Title>
            독특하고 창의작인{" "}
            <b style={{ color: colors.primarybold }}>개발자</b> Famous 유명환
            입니다
          </Title>
        </Interduce>
        <Maincontents>
          <div className="Main">
            <div className="project">
              <h1>project</h1>
              <ul>
                {portfolio.map((data) => (
                  <li key={data.id}>{data.text}</li>
                ))}
              </ul>
            </div>
            <div className="Awards">
              <h1>awards</h1>
              <ul>
                {portfolio.map((data) => (
                  <li key={data.id}>{data.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="interduce">
            <div className="title">안녕하세요!</div>
            <div className="content">어쩌구 저쩌구</div>
          </div>
        </Maincontents>
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
  justify-content: center;
`;
const Maincontents = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &>div{
    height: 100%;
  }
  &>.interduce{
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    &>.title{
      font-size:20px;
      font-weight:700;
      padding:0 0 10px 0;
    }
    &>.content{
      font-size:11px;
    }
  }
  & > .Main {
    display: flex;
    justify-content: space-around;
    align-items: center;
      position: relative;
      &>div>h1{
        color: ${colors.primarybold};
        padding:5px 0px;
      }
    &>.project{
    }
    &::after {
      position: absolute;
      right: 50%;
      top: 0;
      content: "";
      height: 80%;
      width: 1px;
      box-sizing: border-box;
      margin:20px 0px;
      background: rgba(0,0,0,0.1);
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
  margin-top:30px;
  font-family:"GmarketSansBold";
`;

const Profile = styled.div`
  margin-left: 40px;
  @font-face {
    font-family:"GmarketSansBold";
    src: url("../Resources/fonts/GmarketSansBold.ttf") format("truetype");
    font-style:normal;
    font-weight:normal;
  }
  & > .name {
    /* @import url("../Resources/fonts/GmarketSansBold.otf"); */
    font-family: "GmarketSansBold";
    font-weight:1000;
    /* font-family:url(${require("../Resources/fonts/GmarketSansBold.otf")}) format("truetype"); */
    font-size: 35px;
  }
  & > .nickname {
    font-family:"GmarketSansMedium";
    font-size: 19px;
  }
  & > .contents {
    font-family:"GmarketSansLight";
    font-size: 14px;
  }
`;
export default Mypage;

