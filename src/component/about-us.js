import React, {Component, Fragment} from 'react';
import Who from './who';
import Events from './events';

export default class AboutUs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      david: {
        name: 'David',
        description: 'My name is David and I am originally from Miami, but I have lived in Southwest Florida with my family for the past four years. I graduated from University of Maryland Universitly College with a degree in Digital Design and Web Technology. I then earned my Graduate Certificate in Geographic Information Systems, and I am about 6 credits away from a Master in Geodesign. I have worked as a Software Engineer for over a year using Angular, AngularJS, and C#. In my free time I like to take it easy and spend time with family and friends, usually their is food involved.',
        image: require( "../images/David.png" ),
      },
      kush: {
        name: 'Kush',
        description: 'My name is Kush Shrestha. I am a motivated self-starter who can successfully manage multiple projects and deadlines. I have bachelor’s degree in Mechanical Engineering from University of North Texas in Denton, Texas. I recently transition from military. While transitioning from military I wanted to work in IT field. I found out about this AWS Software Development Engineer apprenticeship program and it was exactly what I wanted to do. As a part of apprenticeship program, I am taking a course in Code Fellows to become a full stack Software Developer.',
        image: require( "../images/Kush.png" ),
      },
      chai: {
        name: 'Chai',
        description: 'I have a background in Aerospace,E-commerce and Casino management. I am looking to apply My new  development skills to use an innovative,user-centric approach to solve problems for others. I believes that problem solving should be organic, data-driven, and iterative. In my spare time, you\'ll find me Watching Cosmos, Cooking, spending time with my dog',
        image: require( "../images/Chai.png" ),
      },
      william: {
        name: 'William',
        description: 'William is a Software Developer with training from both traditional college and coding boot camps in addition to self-teaching through online platforms. Draws inspiration from science fiction and wants to help bring the future to us.',
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

        <div className="what">
          <h2>What</h2>
          <p>This application will serve as a user hub for dungeon masters to be able to obtain the most up to date monster information on playing cards. The user will be able to scroll through the monster compendium and view basic information on any monster card.</p>
        </div>

        <div className="why">
          <h2>Why</h2>
          <p>One of the big problems with card-based games is that as cards are updated, users are required to buy new cards in order to keep up to date with their monsters’ abilities. This application will solve that problem by pulling current information from the API and displaying up to date monster information in the form of digital cards which the user can 'flip' through.</p>
        </div>

        <div className="events">
          <h2>Events</h2>
          <div className="events-container">
            <Events/>
          </div>
        </div>
      </Fragment>
    );
  }
}
