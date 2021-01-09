import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Img } from "../Resources/img";
import colors from "../Resources/constants/colors";

function Home(){
  const {t}= useTranslation();
  return(
    <Layout>
      <Wrap>
        <img src={Img.home} alt=""/>
        <Title>{t('welcome')}</Title>
      </Wrap>
    </Layout>
  )
}
const Wrap = styled.div`
  margin-top: 108px;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background:linear-gradient(to bottom,${colors.primarymidle},${colors.primaryWhite},${colors.primarymidle});
  &>img{
    animation-duration: 5s;
    animation-name:slidein;
    max-height:100vh;
    height:80%;
    width:100%;
  }
`;
const Title = styled.h1`
position: fixed;
width:450px;
color:${colors.primaryWhite};
bottom:30%;
`;


export default Home;
