import React, { Component } from 'react';

class Contact extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="contactContainer">
        <input
          onChange={this.props.handleChange}
          id="phoneNumber"
          type="tel"
          placeholder="123456789"
        />
        <input
          onChange={this.props.handleChange}
          id="email"
          type="email"
          placeholder="abc@something.com"
        />
        <input
          onChange={this.props.handleChange}
          id="address"
          type="text"
          placeholder="your address"
        />
        <input
          onChange={this.props.handleChange}
          id="website"
          type="url"
          placeholder="www.something.com"
        />
      </div>
    );
  }
}

export default Contact;
