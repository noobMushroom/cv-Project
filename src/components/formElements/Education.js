import React, { Component } from 'react';

class Education extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        {this.props.education.map((index) => {
          return (
            <div className="educationContainer" key={index.id}>
              <div className="courseName">
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  id="course"
                  type="text"
                  placeholder="course"
                />
              </div>
              <div className="collegeName">
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  id="college"
                  type="text"
                  placeholder="some cool college"
                />
              </div>
              <div className="beginingYear">
                <label className="beginingYear__label" htmlFor="startingYear">
                  Starting Year :
                </label>
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  type="date"
                  id="startingYear"
                  placeholder="passing year"
                />
              </div>
              <div className="passingYear">
                <label htmlFor="endingYear" className="passingYear__label">
                  Passing Year :
                </label>
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  id="endingYear"
                  type="date"
                />
              </div>
              <div className="deleteBtn">
                <button
                  onClick={(e) => this.props.removeEducation(e, index.id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
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
