import React, {Component, Fragment} from 'react';
import hero from '../images/hero.jpg'

export default class Hero extends Component {
  render () {
    return (
      <Fragment>
        <div className="hero-image">
          <div className="hero-image_container">
            <img alt="hero"></img>
            <h1>Welcome</h1>
          </div>
        </div>
      </Fragment>
    );
  }
};
