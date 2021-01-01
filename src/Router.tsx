import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home'

export default(
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </Router>
);