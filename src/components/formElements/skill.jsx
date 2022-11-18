import React, { Component } from 'react';
import uniqid from 'uniqid';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skill: [uniqid()] };
    this.addSkill = this.addSkill.bind(this);
  }

  addSkill(e) {
    e.preventDefault();
    let temp = [...this.state.skill];
    temp.push(uniqid());
    this.setState({ skill: temp });
  }

  delete(value) {
    let newArray = this.state.skill.filter((id) => id !== value);
    this.setState({ skill: newArray });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.skill.map((element) => {
            return (
              <div key={element}>
                <input typeof="text" placeholder="coding" />
                <button onClick={() => this.delete(element)}>Delete me</button>
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
