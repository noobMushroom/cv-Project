import React, { Component } from 'react';
import uniqid from 'uniqid';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = { education: [uniqid()] };
    this.addEducation = this.addEducation.bind(this);
  }

  addEducation(e) {
    e.preventDefault();
    const temp = [...this.state.education];
    temp.push(uniqid());
    this.setState({ education: temp });
  }

  delete(value) {
    let newArray = this.state.education.filter((id) => id !== value);
    this.setState({ education: newArray });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.education.map((index) => {
            return (
              <div key={index}>
                <input type="text" placeholder="some cool college" />
                <label htmlFor="startingYear">Starting Year</label>
                <input
                  type="date"
                  id="startingYear"
                  placeholder="passing year"
                />
                <label htmlFor="passingYear">Passing Year</label>
                <input type="date" />
                <button onClick={() => this.delete(index)}>Delete Me</button>
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
