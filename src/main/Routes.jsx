import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Dados from '../components/dados/Dados'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} /> 
        <Route path='/dados' component={Dados} />
        <Redirect from='*' to='/' />
    </Switch>