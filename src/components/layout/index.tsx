import React from "react";
import { Helmet } from "react-helmet";
import styled, {ThemeProvider,createGlobalStyle,css} from "styled-components";
import colors from "../../Resources/constants/colors";

import Header from "./Header";
interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
}
function Layout({ title, children }: LayoutProps) {
    const theme={
        isDark:false
    };
  return (
    <>
      <Helmet>
        {title && <title>{title}</title>}
      </Helmet>
      <ThemeProvider theme={theme}>
       <Wrap>
       <Globalstyle/>
        <Header />
        <article>{children}</article>
       </Wrap>
      </ThemeProvider>
    </>
  );
}
const Globalstyle=createGlobalStyle`
body{
  background:${colors.primaryWhite};
}
${(props) =>
      props.theme.isDark &&
      css`
        body {
          background: #242526;
          color: white;
        }
      `} 
`;
const Wrap = styled.div`
&>article{
  height: calc(100vh - 108px);
  margin-top:108px;
}
`;


export default Layout;
