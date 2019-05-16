import React, {Component, Fragment} from 'react';
import Hero from './hero';
import AboutUs from './about-us';


export default class Home extends Component {

  render () {
    return (
      <Fragment>
        <Hero/>
        <AboutUs/>
      </Fragment>
    );
  }
};