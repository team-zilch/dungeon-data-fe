import React, {Fragment} from 'react';
import Header from './header';
import Hero from './hero';
import AboutUs from './about-us'
import Footer from './footer'
import '../scss/core.scss'

export default function App() {
  return (
    <Fragment>
      <Header/>
      <Hero />
      <AboutUs />
      <Footer />
    </Fragment>
  );
}
