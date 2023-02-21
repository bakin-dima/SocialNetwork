import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { requestFollowedUsers, unfollow } from "../../redux/usersReducer";

class NavbarContainer extends React.Component {
  componentDidMount() {
    this.props.requestFollowedUsers();
  }

  render() {
    return <Navbar {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    linksList: state.sidebar.linksList,
    isAuth: state.auth.isAuth,
    followedUsers: state.usersPage.followedUsers,
  };
};

export default connect(mapStateToProps, { requestFollowedUsers, unfollow })(NavbarContainer);
