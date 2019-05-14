import React, {Component, Fragment} from 'react';
import superagent from 'superagent';
// import * as images from '../images/characters';

export default class Monsters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: [],
      name: [],
      path: 'character/',
      fileType: '.jpg',
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    superagent.get('https://intense-waters-97587.herokuapp.com/monster')
      .then(response => {
        console.log(response);
        this.setState({response: JSON.parse(response.text)});
      })
  }

  render () {
    let images = [];

    this.state.response.map(el => images.push({name: el.name, path: `characters/${el.name}.jpg`}));

    return (
      <Fragment>
        <div className="monsterImages">
            {images.map(el => <div><h2>{el.name}</h2><img src={el.path}></img></div>)}
        </div>
      </Fragment>
    );
  }
};


