import React, { Component } from 'react';
import uniqid from 'uniqid';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skill: [1], id: uniqid() };
    this.addSkill = this.addSkill.bind(this);
  }

  addSkill(e) {
    e.preventDefault();
    let temp = [...this.state.skill];
    temp.push(1);
    this.setState({ skill: temp });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.skill.map((element) => {
            return (
              <div key={uniqid()}>
                <input typeof="text" placeholder="coding" />
                <button>Delete me</button>
              </div>
            );
          })}
        </div>
        <div className="addBtnContainer">
          <button id="AddSkill" onClick={this.addSkill}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Skills;
