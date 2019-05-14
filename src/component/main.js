import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home.js';
import Monsters from './monsters.js';
import AboutGame from './about-game.js';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/monsters' component={Monsters}/>
    <Route path='/about-game' component={AboutGame}/>
  </Switch>
)

export default Main