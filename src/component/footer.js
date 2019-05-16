import React, {Component} from 'react';
import fire from './fire';

export default class Footer extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout(){
    fire.auth().signOut();
  }
  render () {
    return (
      <footer>
        <p>2019 Dungeon of Dragons Data</p>
        <button onClick={this.logout}>Logout</button>
      </footer>
    );
  }
};
