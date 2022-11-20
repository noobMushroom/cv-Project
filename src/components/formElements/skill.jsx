import React, { Component } from 'react';
import uniqid from 'uniqid';

class Skills extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        {this.props.skills.map((element) => {
          return (
            <div className="skillsContainer" key={element.id}>
              <div className="skillInput">
                <input
                  onChange={(event) =>
                    this.props.handleChange(event, element.id)
                  }
                  typeof="text"
                  placeholder="coding"
                />
              </div>
              <div className="deleteBtn">
                <button onClick={(e) => this.props.deleteSkill(e, element.id)}>
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
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
