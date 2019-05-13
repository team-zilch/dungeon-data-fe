import React, {Fragment} from 'react';

class Who extends React.Component {
  render () {
    return (
      <Fragment>
        <img src = {this.props.image} width="75" alt="Creaters"></img>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
      </Fragment>
    );
  };
}

export default Who;
