import React, {Component, Fragment} from 'react';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className="header-container">
            <h1>Dungeon Data</h1>
            <nav>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>About Game</li>
                <li>Monsters</li>
              </ul>
            </nav>
          </div>
        </header>
      </Fragment>
    )
  }
}