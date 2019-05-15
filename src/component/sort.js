import React, { Component, Fragment } from 'react';

export default class Sort extends Component {
  render() {
    return (
      <Fragment>
        <div className="sort-container">
          <label>
            <h2>Sort:</h2>
          </label>
          <button onClick={this.props.sort} value="name" type="name">Name</button>
          <button onClick={this.props.sort} value="type" type="type">Type</button>
          <button onClick={this.props.sort} value="armor_class" type="armor_class">Armor Class</button>
          <button onClick={this.props.sort} value="challenge_rating" type="challenge_rating">Challenge Rating</button>
        </div>
      </Fragment>
    );
  }
}