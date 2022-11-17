import React, { Component } from 'react';
import uniqid from 'uniqid';

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = { work: [uniqid()] };
    this.addWork = this.addWork.bind(this);
  }

  addWork(e) {
    e.preventDefault();
    let temp = [...this.state.work];
    temp.push(uniqid());
    this.setState({ work: temp });
  }

  removeWork(value) {
    let newArray = this.state.work.filter((id) => id !== value);
    this.setState({ work: newArray });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.work.map((index) => {
            return (
              <div key={index}>
                <input type="text" />
                <label>Ending Year </label>
                <input typeof="date" id="startingYear" />
                <label>Ending Year </label>
                <input typeof="date" id="endingYear" />
                <button onClick={() => this.removeWork(index)}>
                  Delete me
                </button>
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
