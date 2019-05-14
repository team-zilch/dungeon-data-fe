import React, {Fragment} from 'react';

class Who extends React.Component {
  render () {
    return (
      <Fragment>
        <ul>
          <li><img src={this.props.image} alt="Creaters"/></li>
          <li><h3>{this.props.name}</h3></li>
          <li><p>{this.props.description}</p></li>   
        </ul>
      </Fragment>
    );
  };
}

export default Who;
