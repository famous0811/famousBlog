import React,{ useState, useEffect} from "react";
import styled, { css } from "styled-components";
//작품을 2가지로 반환 디테일 or 간단한 소게
import colors from "../Resources/constants/colors";
import { Link,useHistory } from "react-router-dom";
interface Portfoliosprops {
  detail?: boolean;
  _id: string;
  eng: string;
  kor: string;
  img: string;
}
function Portfolios({ detail, _id, kor,eng, img }: Portfoliosprops) {
    const history = useHistory();
    // const { language } = props.language;
    const [language,setlanguage]=useState(window.localStorage.getItem("language"));

    useEffect(() => {
      // setlanguage(window.localStorage.getItem("language"));
      alert("laguage");
    },[window.localStorage.getItem("language")])

    // const nowlanguage =window.localStorage.getItem("language");
    if (detail) {
    return (
      <>
        <Background onClick={()=>history.replace("/portfolios")}/>
        <Wrap detail>
          <img src={atob(img)} alt="(대충 대단한 프로젝트)" />
          <div>{language==="kor" ? kor : eng}</div>
        </Wrap>
        <ReviseButton admin={window.localStorage.getItem("admin")!==undefined}>
        <div onClick={() => history.replace("/adminReviseportfolio/"+ _id)}>✍</div>
      </ReviseButton>
      </>
    );
  } else {
    return (
      <Wrap>
        <img src={atob(img)} alt="(대충 대단한 프로젝트)" />
        <div>{language==="kor" ? kor : eng}</div>
        <Link to={"/portfolios/" + _id} />  
      </Wrap>
    );
  }
}
const Wrap = styled.div<{ detail?: boolean }>`
  background: ${colors.primary};
  width: 100%;
  height: 100%;
  max-width: 500px;
  max-height: 300px;
  margin: 10px 20px;
  padding: 20px 40px;
  border-radius: 15px;
  position: relative;
  & > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &>img{
    max-width:200px;
  }
  ${({ detail }) =>
    detail &&
    css`
      position: fixed;
      z-index: 201;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 700px;
      max-height: 400px;
      & > a {
        display: none;
      }
    `}
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(231, 231, 222, 0.5);
  z-index: 200;
  cursor: pointer;
`;
const ReviseButton = styled.div<{admin: boolean}>`
${({admin})=>!admin && css`
      display:none;
`}
  position: fixed;
  bottom: 6%;
  right: 3%;
  cursor: pointer;
  background: gray;
  padding: 15px;
  border-radius: 50px;
  z-index: 201;
`;
export default Portfolios;
