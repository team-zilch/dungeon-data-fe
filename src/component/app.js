import React, {Fragment} from 'react';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import '../scss/core.scss';

export default function App() {
  return (
    <Fragment>
        <Header/>
        <Main/>
        <Footer/>
    </Fragment>
  );
}
