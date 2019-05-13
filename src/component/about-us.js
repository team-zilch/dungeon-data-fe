import React, {Component} from 'react';
import david from '../images/David.png';
import kush from '../images/Kush.png';
import chai from '../images/Chai.png';
import william from '../images/William.png';

class AboutUs extends Component {
  render() {
    return (
      <div>
      <img src={david} alt="" width = "75px" />
      <p>David Marchante</p>
      
      <img src={kush} alt="" width = "75px" />
      <p>Kush Shrestha</p>

      <img src={chai} alt="" width = "75px" />
      <p>Chaitanya Narukulla</p>

      <img src={william} alt="" width = "75px" />
      <p>William Fritts</p>
      </div>
    );
  }
};

export default AboutUs;
