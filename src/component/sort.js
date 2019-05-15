import React, { Component, Fragment } from 'react';

export default class Sort extends Component {

  handleSubmit = event => {
    event.preventDefault();
  }

  handleSize = event => {
    console.log('size');
  }

  render() {
    return (
      <Fragment>
        <form className="filterBy" onSubmit={this.handleSubmit}>
          <label>
            Sort the monster by features:
            <select onChange={this.handleChange}>
              <option value="sortBy">Sort By</option>
              <option onChange={this.handleSize}>Size</option>
              <option value="type">Type</option>
              <option value="armorClass">Class</option>
            </select>
            <input className="submit" type="submit" value="Submit" />
          </label>
        </form>
      </Fragment>
    );
  }
}