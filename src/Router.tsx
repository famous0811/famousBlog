import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home'
import Mypage from './pages/mypage'
import Portfolios from './pages/portfolios';

export default(
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/mypage" component={Mypage}/>
            <Route
				path={['/portfolios/:id', '/portfolios']}
				exact
				component={Portfolios}
			/>
        </Switch>
    </Router>
);