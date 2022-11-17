import React, { Component } from 'react';
import uniqid from 'uniqid';

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = { work: [1], id: uniqid() };
    this.addWork = this.addWork.bind(this);
  }

  addWork(e) {
    e.preventDefault();
    let temp = [...this.state.work];
    temp.push(1);
    this.setState({ work: temp });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.work.map((index) => {
            return (
              <div key={uniqid()}>
                <input type="text" />
                <label>Ending Year </label>
                <input typeof="date" id="startingYear" />
                <label>Ending Year </label>
                <input typeof="date" id="endingYear" />
                <button>Delete me</button>
              </div>
            );
          })}
        </div>
        <div className="addBtnContainer">
          <button id="AddSkill" onClick={this.addWork}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
export default WorkExperience;
