import React, { Component } from 'react';

class Education extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="some cool college" />
        <label htmlFor="startingYear">Starting Year</label>
        <input type="date" id="startingYear" placeholder="passing year" />
        <label htmlFor="passingYear">Passing Year</label>
        <input type="date" />
      </div>
    );
  }
}

export default Education;
