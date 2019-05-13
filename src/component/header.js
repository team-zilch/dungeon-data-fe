import React, {Component, Fragment} from 'react';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <h1 className="cinzel">
            Dungeon Data
          </h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>About Game</li>
              <li>Monsters</li>
            </ul>
          </nav>
        </header>
      </Fragment>
    )
  }
}