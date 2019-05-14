import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';


export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className="header-container">
            <h1>
              <Link to="/">
                Dungeon Data
              </Link>
            </h1>
            <nav>
              <ul>
                <li>
                  <Link to="/monsters">
                    Monsters
                  </Link>
                </li>
                <li>
                  <Link to="/about-game">
                    About Game
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </Fragment>
    )
  }
}