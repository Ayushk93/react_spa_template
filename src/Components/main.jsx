import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './home'
import Cricketer from './cricketer'
import Schedule from './schedule'
import PageNotFound from './pagenotfound'

const Main = () => (
    <Switch>
        <Route exact path='/' render={() => (<Redirect to='./home' />) } />
        <Route path='/home' component={Home} />
        <Route path='/cricketer' component={Cricketer} />
        <Route path='/schedule' component={Schedule} />
        <Route path='*' component={PageNotFound} />
    </Switch>
)

export default Main;