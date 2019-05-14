import React, {Fragment} from 'react';
import Header from './header.js';
import Main from './main.js';
import AboutUs from './about-us.js';
import Footer from './footer.js';
import '../scss/core.scss';

export default function App() {
  return (
    <Fragment>
        <Header/>
        <Main/>
        <AboutUs/>
        <Footer/>
    </Fragment>
  );
}
