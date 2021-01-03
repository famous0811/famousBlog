import React from "react";
import styled, { css } from "styled-components";
//작품을 2가지로 반환 디테일 or 간단한 소게
import colors from "../Resources/constants/colors";
import { Link,useHistory } from "react-router-dom";
interface Portfoliosprops {
  detail?: boolean;
  id: string;
  content: string;
  img: string;
}
function Portfolios({ detail, id, content, img }: Portfoliosprops) {
    const history = useHistory();
    if (detail) {
    return (
      <>
        <Background onClick={()=>history.replace("/portfolios")}/>
        <Wrap detail>
          <img src={img} alt="(대충 대단한 프로젝트)" />
          <div>{content}</div>
        </Wrap>
      </>
    );
  } else {
    return (
      <Wrap>
        <img src={img} alt="(대충 대단한 프로젝트)" />
        <div>{content}</div>
        <Link to={"/portfolios/" + id} />
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
export default Portfolios;
