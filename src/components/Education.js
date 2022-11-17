import React, { Component } from 'react';
import uniqid from 'uniqid';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = { education: [1], id: uniqid() };
    this.addEducation = this.addEducation.bind(this);
  }

  addEducation(e) {
    e.preventDefault();
    const temp = [...this.state.education];
    temp.push(1);
    this.setState({ education: temp });
  }
  render() {
    return (
      <div>
        <div>
          {this.state.education.map((index) => {
            return (
              <div key={uniqid()}>
                <input type="text" placeholder="some cool college" />
                <label htmlFor="startingYear">Starting Year</label>
                <input
                  type="date"
                  id="startingYear"
                  placeholder="passing year"
                />
                <label htmlFor="passingYear">Passing Year</label>
                <input type="date" />
                <button>Delete Me</button>
              </div>
            );
          })}
        </div>
        <div className="addBtnContainer">
          <button id="AddSkill" onClick={this.addEducation}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Education;
