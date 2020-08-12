import React from 'react';
import {Switch, Route} from 'react-router-dom'
import FullCricketers from './fullcricketers'
import Player from './player'
import PageNotFound from './pagenotfound'

const Cricketer = () => (
     <Switch>
          <Route exact path='/cricketer' component={FullCricketers} />
          <Route path='/cricketer/:id' component={Player} />
          <Route path='*' component={PageNotFound} />
     </Switch>
)

export default Cricketer;