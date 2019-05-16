import React, {Component, Fragment} from 'react';
import superagent from 'superagent';
import Sort from './sort.js';
import If from './if.js';

export default class Monsters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
    }
  }

  componentDidMount() {
    superagent.get('https://intense-waters-97587.herokuapp.com/monster')
      .then(response => {
        this.setState({monsters: JSON.parse(response.text)});
      })
  }

  sortMonsters = (event) => {
    event.preventDefault();
    let sortValue = event.target.value;
    let sortedMonsters = [];
    if(typeof sortValue === 'string'){
      sortedMonsters = this.state.monsters.sort((a, b) => (a[sortValue] > b[sortValue]) ? 1 : -1);
    } else {
      sortedMonsters = this.state.monsters.sort((a, b) => a - b);
    }
    this.setState({ monsters : sortedMonsters });
  }

  render () {
    let monstersWithImages = [];

    this.state.monsters.map(el => monstersWithImages.push({name: el.name, path: `characters/${el.name}.jpg`, size: el.size, type: el.type, armor_class: el.armor_class, hit_points: el.hit_points, hit_dice:el.hit_dice, challenge_rating: el.challenge_rating}));
    
    return (
      <Fragment>
        <If condition = {this.state.monsters.length}><Sort monsterData={this.state.monsters} sort={this.sortMonsters}/></If>
        <div className="monsterImages">
          {monstersWithImages.map(el => <div className="monsterCard">
              <div className="monsterCard-inner">
                <div className="monsterCard-front">
                  <img src={el.path} alt="monsters"></img>
                  <h4 className="monsterCard-header">{el.name}</h4>
                </div>
                <div className="monsterCard-back">
                  <h4>{el.name}</h4>
                  <ul>
                    <li>Size: {el.size}</li>
                    <li>Type: {el.type}</li>
                    <li>Armor Class: {el.armor_class}</li>
                    <li>Hit Points: {el.hit_points}</li>
                    <li>Hit Dice: {el.hit_dice}</li>
                    <li>Challenge Rating: {el.challenge_rating} </li>
                  </ul>
                </div>
              </div>
            </div>)}
        </div>
      </Fragment>
    );
  }
};


