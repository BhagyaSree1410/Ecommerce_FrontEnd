import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './dashboard/login';
import Home from './dashboard/home';
import Search from './dashboard/search';
import Register from './dashboard/Register';
const Router = () => {
    return(
    <Switch>
        <Route exact path ='/Home' component = { Home }/>
        <Route exact path ='/login' component = { Login }/>
        <Route exact path ='/register' component = { Register }/>
        <Route exact path ='/search' component = {Search}/>
    </Switch>
    )
}

export default Router;
