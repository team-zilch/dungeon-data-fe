import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hero from './hero.js';
import Monsters from './monsters.js';
import AboutGame from './about-game.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Hero}/>
      <Route path='/monsters' component={Monsters}/>
      <Route path='/about-game' component={AboutGame}/>
    </Switch>
  </main>
)

export default Main