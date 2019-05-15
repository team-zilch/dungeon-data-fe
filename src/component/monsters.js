import React, {Component, Fragment} from 'react';
import superagent from 'superagent';
import Sort from './sort.js';

export default class Monsters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: [],
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

  sortResponse = (event) => {
    event.preventDefault();
    let sortValue = event.target.value;
    let sortedResponse = [];
    if(typeof sortValue === 'string'){
      sortedResponse = this.state.response.sort((a, b) => (a[sortValue] > b[sortValue]) ? 1 : -1);
    } else {
      sortedResponse = this.state.response.sort((a, b) => a - b);
    }
    this.setState({ response : sortedResponse });
  }

  render () {
    let images = [];

    this.state.response.map(el => images.push({name: el.name, path: `characters/${el.name}.jpg`, size: el.size, type: el.type, armor_class: el.armor_class, hit_points: el.hit_points, hit_dice:el.hit_dice, challenge_rating: el.challenge_rating}));
    
    return (
      <Fragment>
        if(this.state.response) {
          <Sort monsterData={this.state.response} sort={this.sortResponse}/>
        }
        <div className="monsterImages">
          {images.map(el => <div className="monsterCard">
              <div className="monsterCard-inner">
                <div className="monsterCard-front">
                  <img src={el.path} alt="monsters"></img>
                  <h3>{el.name}</h3>
                </div>
                <div className="monsterCard-back">
                  <ul>
                    <li><h3>{el.name}</h3></li>
                    <li>Size: {el.size}</li>
                    <li>Type: {el.type}</li>
                    <li>Armor Class: {el.armor_class}</li>
                    <li>Hit Points{el.hit_points}</li>
                    <li>Hit Dice{el.hit_dice}</li>
                    <li>Challenge Rating{el.challenge_rating} </li>
                  </ul>
                </div>
              </div>
            </div>)}
        </div>
      </Fragment>
    );
  }
};


