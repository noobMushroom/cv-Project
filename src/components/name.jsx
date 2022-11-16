import React, { Component } from 'react';

class Name extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Bio</legend>
        <input id="Name" type="text" placeholder="First Name" />
        <input id="Name" type="text" placeholder="Last Name" />
        <textarea id="description" placeholder="Write about you" />
      </fieldset>
    );
  }
}
export default Name;
