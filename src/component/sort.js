import React, { Component, Fragment } from 'react';

export default class Sort extends Component {
  render() {
    return (
      <Fragment>
        <div className="sort-container">
          <label>
            <h2>Sort:</h2>
          </label>
          <select onChange={this.props.sort}>
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="type">Type</option>
            <option value="armor_class">Armor Class</option>
            <option value="challenge_rating">Challenge Rating</option>
          </select>
        </div>
      </Fragment>
    );
  }
}