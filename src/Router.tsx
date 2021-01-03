import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home'
import Mypage from './pages/mypage'

export default(
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/mypage" component={Mypage}/>
        </Switch>
    </Router>
);