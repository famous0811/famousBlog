import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { observer, inject } from "mobx-react";
import { useTranslation } from "react-i18next";

import colors from "../../Resources/constants/colors";

const Header = inject("language")((props: any) => {
  const { t, i18n } = useTranslation();
  const { language, changeLanguage } = props.language;
  const changelanguage = (lng: string) => {
    lng==="eng" ? lng="kor" : lng="eng"
    changeLanguage(lng);
    i18n.changeLanguage(lng);
  };
  const [menus, setmenus] = useState([
    {
      id: 0,
      text: t("menu1"),
      link: "",
    },
    {
      id: 1,
      text: t("menu2"),
      link: "",
    },
    {
      id: 2,
      text: t("menu3"),
      link: "",
    },
  ]);

  useEffect(() => {
    setmenus(
      menus.map((data) => ({
        id: data.id,
        text: t("menu" + (data.id + 1)),
        link: data.link,
      }))
    );
  }, [i18n.language]);
  //   alert();
  return (
    <Wrap>
      <Title>{t("title")}</Title>
      <Menu>
        <ul>
          {menus.map((menu) => (
            <li key={menu.id}><a href={menu.link}>{menu.text}</a></li>
          ))}
        </ul>
        <div>
          <div className="language">
            <div>한국어</div>
            <TogleButton language={language}>
              <div onClick={()=>changelanguage(language)}/>
            </TogleButton>
            <div>영어</div>
          </div>
          <div className="darkmode"></div>
        </div>
      </Menu>
    </Wrap>
  );
});

const Wrap = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${colors.primarymidle};
  font-size: 18px;
`;
const Title = styled.div`
  font-size: 1.2em;
  text-align: center;
  color: ${colors.primaryWhite};
  font-weight: bold;
  padding: 20px 0px;
`;
const Menu = styled.div`
  width: 100%;
  background: ${colors.primarybold};
  color: ${colors.primaryWhite};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 5px 0px;
  & > ul {
    display: flex;
    & > li {
      padding: 0px 10px;
      &>a{
        color:${colors.primaryWhite};
        transition:font-weight 0.3s;
        &:hover{
          font-weight:bold;
        }
      }
    }
  }
  & > div {
    position: absolute;
    right: 1%;
    & > .language {
      display: flex;
    }
  }
`;

const TogleButton = styled.div<{ language: string }>`
  border-radius: 20px;
  background: ${colors.primary};
  margin:0px 10px;
  position: relative;
  width: 50px;
  height: 25px;
  & > div {
    position: absolute;
    border-radius: 50%;
    width: 23px;
    height: 23px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: gray;
    transition: transform 0.5s;
    cursor:pointer;
    ${({ language }) =>
      language === "kor"
        ? css`
            transform: translate(-100%, -50%);
          `
        : css`
        transform: translate(0%, -50%);
          `}
  }
`;
export default Header;
