import React, {Fragment} from 'react';
import fire from './fire.js';
import Login from './login.js';
import Header from './header.js';
import Main from './main.js';
import Footer from './footer.js';
import '../scss/core.scss';

// export default function App() {
//   return (
//     <Fragment>
//         <Header/>
//         <Main/>
//         <Footer/>
//     </Fragment>
//   );
// }

class App extends React.Component {
  constructor(){
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if(user){
        this.setState({user})
      } else {
        this.setState({user:null});
      }
    });
  }

  render(){
    return(
      <div>{this.state.user ? (
        <Fragment>
          <Header/>
          <Main/>
          <Footer/>
        </Fragment>
      ) : (<Login />)}</div>
    )
  }

}

export default App;