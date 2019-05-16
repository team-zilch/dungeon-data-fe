import React, {Component, Fragment} from 'react';
import superagent from 'superagent';
// import If from './if.js';

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    }
  }

  componentDidMount() {
    superagent.get('https://intense-waters-97587.herokuapp.com/events')
    .then(response => {

      console.log(response);
      this.setState({events: JSON.parse(response.text)});
    })
  }

  render() {
    let eventItems = this.state.events.map(event => <Fragment><li><h3>{event.event_name}</h3></li><li><p>{event.summary} <a target="_blank" href={event.link}>Link to Event</a></p></li></Fragment>);
    
    return (
      <ul className="event-items">
        {eventItems}
      </ul>
    )
  }
}
