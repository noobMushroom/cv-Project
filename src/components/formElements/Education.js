import React, { Component } from 'react';

class Education extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div>
          {this.props.education.map((index) => {
            return (
              <div key={index.id}>
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  id="course"
                  type="text"
                  placeholder="course"
                />
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  id="college"
                  type="text"
                  placeholder="some cool college"
                />
                <label htmlFor="startingYear">Starting Year</label>
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  type="date"
                  id="startingYear"
                  placeholder="passing year"
                />
                <label htmlFor="endingYear">Passing Year</label>
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  id="endingYear"
                  type="date"
                />
                <button onClick={() => this.props.removeEducation(index.id)}>
                  Delete Me
                </button>
              </div>
            );
          })}
        </div>
        <div className="addBtnContainer">
          <button id="AddSkill" onClick={this.props.addEducation}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Education;
