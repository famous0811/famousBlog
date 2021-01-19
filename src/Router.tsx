import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Mypage from "./pages/mypage";
import Portfolios from "./pages/portfolios";
import Writed from "./pages/Guestbook";

import Login from "./pages/admin/login";
import Writepage from "./pages/admin/writeportfolio";
import SignUp from "./pages/admin/signup";

import writemypages from "./pages/admin/writemypage";
import Reviseportfolio from "./pages/admin/Reviseportfolio";
export default (
  <BrowserRouter basename="/famousBlog">
    <Route exact path="/" component={Home} />
    <Route exact path="/mypage" component={Mypage} />
    <Route exact path="/guestbook" component={Writed} />
    <Route
      path={["/portfolios/:id", "/portfolios"]}
      exact
      component={Portfolios}
    />
    <Route exact path="/adminlogin" component={Login} />
    <Route exact path="/adminsignup" component={SignUp} />
    <Route exact path="/adminwritemypages" component={writemypages} />
    <Route exact path="/adminReviseportfolio/:id" component={Reviseportfolio} />
    <Route exact path="/write" component={Writepage} />
  </BrowserRouter>
);
