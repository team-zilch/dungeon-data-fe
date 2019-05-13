import React from 'react';
import Header from './header';
import Hero from './hero';
import AboutUs from './about-us'
import Footer from './footer'

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <AboutUs />
      <Footer />
    </React.Fragment>
  );
}
