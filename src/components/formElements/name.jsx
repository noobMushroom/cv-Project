import React, { Component } from 'react';

class Name extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="nameContainer">
        <div className="nameContainer__names">
          <input
            onChange={this.props.handleChange}
            id="firstName"
            type="text"
            placeholder="First Name"
          />
          <input
            onChange={this.props.handleChange}
            id="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="nameContainer__description">
          <textarea
            onChange={this.props.handleChange}
            id="description"
            placeholder="Write about you"
          />
        </div>
        <div className="nameContainer__image">
          <label className="imageLabel" htmlFor="image">
            Choose a Profile Pic :
          </label>
          <input
            onChange={this.props.handleChange}
            id="image"
            type="file"
            accept="image/*"
            placeholder="image"
          />
        </div>
      </div>
    );
  }
}
export default Name;
