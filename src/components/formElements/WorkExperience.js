import React, { Component } from 'react';

class WorkExperience extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        {this.props.work.map((index) => {
          return (
            <div className="workContainer" key={index.id}>
              <div className="title">
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  id="title"
                  type="text"
                  placeholder="job title"
                />
              </div>
              <div className="company">
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  id="company"
                  type="text"
                  placeholder="company name"
                />
              </div>
              <div className="location">
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  id="location"
                  type="text"
                  placeholder="location"
                />
              </div>
              <div className="startingYear">
                <label className="startingYear__label">Starting Year : </label>
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  type="date"
                  id="startingYear"
                />
              </div>
              <div className="endingYear">
                <label className="endingYear__label">Ending Year : </label>
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  type="date"
                  id="endingYear"
                />
              </div>
              <div className="deleteWorkBtn">
                <button onClick={(e) => this.props.removeWork(e, index.id)}>
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
        <div className="addBtnContainer">
          <button id="addWorkd" onClick={this.props.addWork}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
export default WorkExperience;
