import React from "react";
import styled,{css} from "styled-components";
import colors from "../../Resources/constants/colors";

type Themetype = "bace" | "custom";

interface Buttonprops {
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  Theme?: Themetype;
  onClick?: () => void;
}

const ButtonTheme = {
  bace: css`color: gray; background-color: #90AFFF; border:1px solid ${colors.primary};`,
  custom: css`color: gray; background-color: #90AFFF; border:1px solid ${colors.primary};`,
};

const ButtonDartTheme = {
  bace: css`color: gray; background-color: #90AFFF; border:1px solid ${colors.primary};`,
  custom: css`color: gray; background-color: #90AFFF; border:1px solid ${colors.primary};`,
};

function Button(props: Buttonprops) {
    const {Theme} =props;

  const Bacebutton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background:none;
    width: ${props.width || "50px"};
    height: ${props.height || "30px"};
    border-radius: 3px;
    font-size: ${props.fontSize || "18px"};
    font-weight: ${props.fontWeight || 500};
    padding: 0;
    margin: 5px 0;
    ${(props) =>
      props.theme.isDark
        ? ButtonDartTheme[Theme ? Theme : "custom"]
        : ButtonTheme[Theme ? Theme : "custom"]}
  `;
  return (
    <Bacebutton style={props.style} onClick={props.onClick}>
      {props.children}
    </Bacebutton>
  );
}

export default Button;
