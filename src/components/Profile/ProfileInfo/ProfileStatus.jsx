import React from "react";
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  enterEditMode() {
    this.setState({
      editMode: true,
    });
  }
  exitEditMode() {
    this.setState({
      editMode: false,
    });
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.enterEditMode.bind(this)}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input autoFocus={true} onBlur={this.exitEditMode.bind(this)} value={this.props.status} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
