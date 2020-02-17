import React from 'react';
import loadable from '@loadable/component'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const Home = loadable(() => import('pages/Home/Home'))
const Page1 = loadable(() => import('pages/Page1/Page1'))
const Counter = loadable(() => import('pages/Counter/Counter'))
const UserInfo = loadable(() => import('pages/UserInfo/UserInfo'))

const getRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/page1" component={Page1}/>
            <Route path="/counter" component={Counter}/>
            <Route path="/userinfo" component={UserInfo}/>
        </Switch>
    </div>
);

export default getRouter;