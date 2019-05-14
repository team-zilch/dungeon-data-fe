import React, {Component, Fragment} from 'react';
import Who from './who';

export default class AboutUs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      david: {
        name: 'David',
        description: 'lorem epsum',
        image: require( "../images/David.png" ),
      },
      kush: {
        name: 'Kush',
        description: 'lorem epsum',
        image: require( "../images/Kush.png" ),
      },
      chai: {
        name: 'Chai',
        description: 'lorem epsum',
        image: require( "../images/Chai.png" ),
      },
      william: {
        name: 'William',
        description: 'lorem epsum',
        image: require( "../images/William.png" ),
      },
    };
  }

  render() {
    return (
      <Fragment>
        <div className="about-us" id="about-us">
          <h2>About Us</h2>
          <div className="about-us_who">
            <Who 
            name = {this.state.david.name}
            description = {this.state.david.description}
            image = {this.state.david.image}
            />
            <Who 
            name = {this.state.kush.name}
            description = {this.state.kush.description}
            image = {this.state.kush.image}
            />
            <Who 
            name = {this.state.chai.name}
            description = {this.state.chai.description}
            image = {this.state.chai.image}
            />
            <Who 
            name = {this.state.william.name}
            description = {this.state.william.description}
            image = {this.state.william.image}
            />
          </div>
        </div>

        <div>
          <h3>What</h3>
          <p>Lorem epsum</p>
        </div>

        <div>
          <h4>Why</h4>
          <p>Lorem epsum</p>
        </div>

      </Fragment>
    );
  }
}
