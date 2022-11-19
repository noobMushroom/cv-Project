import React, { Component } from 'react';

class WorkExperience extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div>
          {this.props.work.map((index) => {
            return (
              <div key={index.id}>
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  id="title"
                  type="text"
                  placeholder="developer"
                />
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  id="company"
                  type="text"
                  placeholder="google"
                />
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  id="location"
                  type="text"
                  placeholder="candyland"
                />
                <label>Ending Year </label>
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  type="date"
                  id="startingYear"
                />
                <label>Ending Year </label>
                <input
                  onChange={(event) => this.props.handleChange(event, index.id)}
                  type="date"
                  id="endingYear"
                />
                <button onClick={() => this.props.removeWork(index.id)}>
                  Delete me
                </button>
              </div>
            );
          })}
        </div>
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
