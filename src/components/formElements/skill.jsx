import React, { Component } from 'react';
import uniqid from 'uniqid';

class Skills extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <div>
          {this.props.skills.map((element) => {
            return (
              <div key={element.id}>
                <input
                  onChange={(event) =>
                    this.props.handleChange(event, element.id)
                  }
                  typeof="text"
                  placeholder="coding"
                />
                <button onClick={() => this.props.deleteSkill(element.id)}>
                  Delete me
                </button>
              </div>
            );
          })}
        </div>
        <div className="addBtnContainer">
          <button id="AddSkill" onClick={this.props.addSkill}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Skills;
