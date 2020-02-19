import React from 'react';
import {Switch, Route} from 'react-router-dom'

//components
import Home from './Components/Home'
import Shows from './Components/Shows'

export default (
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Shows} path='/addShow' />
    </Switch>
)