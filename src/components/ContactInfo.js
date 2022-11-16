import React, { Component } from 'react';

class Contact extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Contact Info</legend>
        <input id="phoneNumber" type="tel" placeholder="123456789" />
        <input type="email" placeholder="abc@somehitng.com" />
        <input type="text" placeholder="your address" />
        <input type="url" placeholder="somehting.com" />
      </fieldset>
    );
  }
}

export default Contact;
