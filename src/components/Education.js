import React, { Component } from 'react';

class Education extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Education Information</legend>
        <input type="text" placeholder="some cool college" />
        <label htmlFor="startingYear">Starting Year</label>
        <input type="date" id="startingYear" placeholder="passing year" />
        <label htmlFor="passingYear">Passing Year</label>
        <input type="date" />
        <button>add</button>
        <button>Edit</button>
      </fieldset>
    );
  }
}

export default Education;
