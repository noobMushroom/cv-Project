import React, { Component } from 'react';

class Name extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
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
        <textarea
          onChange={this.props.handleChange}
          id="description"
          placeholder="Write about you"
        />
      </div>
    );
  }
}
export default Name;
