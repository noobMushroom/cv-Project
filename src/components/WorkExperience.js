import React, { Component } from 'react';

class WorkExperience extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Work Experience</legend>
        <input type="text" />
        <label>Ending Year </label>
        <input typeof="date" id="startingYear" />
        <label>Ending Year </label>
        <input typeof="date" id="endingYear" />
        <button>Add</button>
        <button>Delete</button>
      </fieldset>
    );
  }
}
export default WorkExperience;
