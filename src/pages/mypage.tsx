import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { Img } from "../Resources/img";
import colors from "../Resources/constants/colors";

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
  return (
    <Layout>
      <Wrap>
        <Introduce>
          <UserIcon src={Img.umh1} />
          <div className="name">{t("name")}</div>
          <div className="nickname">{t("nickname")}</div>
          <div className="job">{t("job")}</div>
          <div className="company">{t("company")}</div>
        </Introduce>
        <Details>
          <div className="welcome">
            <div className="subtitle">welcome</div>
            <div className="text">
              안녕하세요! 독특하고 창의적인 개발자 유명환입니다.
              <br />
              어쩌구 저쩌구 ㄻㄴ이룽ㄴ밀ㅇㄴ먀ㅣ뤼
            </div>
          </div>
          <div className="skills">
            <div className="subtitle">skill</div>
            <div className="text">
              <ul>
                {skills.map((data) => (
                  <li key={data.id}>{data.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="portfolio">
            <div className="subtitle">portfolio</div>
            <div className="text">
              <ul>
                {portfolio.map((data) => (
                  <li key={data.id}>{data.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="Contacts">
            <div className="subtitle">Contacts</div>
            <div className="text">
              <ul>
                {Contacts.map((data) => (
                  <li key={data.id}>{data.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="otherinformation">
            <div className="subtitle">Othersite</div>
            <div className="text">
              <ul>
                {otherinformation.map((data) => (
                  <li key={data.id}>{data.text}</li>
                ))}
              </ul>
            </div>
        </div>
        </Details>
        <Portfolios></Portfolios>
      </Wrap>
    </Layout>
  );
}
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;
const Introduce = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 250px;
  padding: 20px 0px;
  margin: 0px 20px;
  .name {
    font-weight: 600;
    font-size: 2.5em;
  }
  .nickname {
    color: gray;
    font-size: 1.05em;
    font-weight: 400;
    line-height: 2em;
  }
  .job {
    color: gray;
  }
  .company {
    color: gray;
  }
`;
const Portfolios = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
const Details = styled.div`
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid ${colors.primarybold};
  border-radius: 10px;
  max-width: 1000px;
  /* max-height:550px; */
  /* height: 100%; */
  width: 100%;
  margin: 20px 0px;
  padding: 20px 30px;
  & > div > .subtitle {
    font-size: 23px;
    font-weight: 700;
    line-height: 30px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      background: gray;
      line-height: 1.5em;
    }
  }
  & > div > .text {
    padding: 20px 0px;
    line-height: 3em;
    font-size: 1.25rem;
  }
`;
const UserIcon = styled.img`
  border-radius: 50%;
  object-fit: cover;
  transform: rotate(-4.5deg);
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;
export default Mypage;
