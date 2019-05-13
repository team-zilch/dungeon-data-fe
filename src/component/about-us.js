import React from 'react';
import Who from './who';

class AboutUs extends React.Component {

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
      <React.Fragment>
        
        <div>
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

        <div>
          <h3>What</h3>
          <p>Lorem epsum</p>
        </div>

        <div>
          <h4>Why</h4>
          <p>Lorem epsum</p>
        </div>

      </React.Fragment>
    );
  }
}

export default AboutUs;

