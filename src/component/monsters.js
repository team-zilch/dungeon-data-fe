import React, {Component, Fragment} from 'react';
import superagent from 'superagent';

export default class Monsters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: '',
    }
  }

  componentDidMount() {
    superagent.get('https://intense-waters-97587.herokuapp.com/')
      .then(response => {
        console.log(response);
        this.setState({test: response.text});
      })
  }

  render () {
    return (
      <Fragment>
        <div>{this.state.test}</div>
      </Fragment>
    );
  }
};
