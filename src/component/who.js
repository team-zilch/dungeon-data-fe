import React, {Fragment} from 'react';

class Who extends React.Component {
  render () {
    return (
      <Fragment>
        <ul>
          <li><img src={this.props.image} alt="Creaters"/></li>
          <li><h2>{this.props.name}</h2></li>
          <li><p>{this.props.description}</p></li>   
        </ul>
      </Fragment>
    );
  };
}

export default Who;
