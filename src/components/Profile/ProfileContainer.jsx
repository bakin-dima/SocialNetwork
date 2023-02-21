import React from "react";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from "../../redux/profileReducer";
import { requestFollowedUsers } from "../../redux/usersReducer";
import Profile from "./Profile";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from "redux";

function withRouter(Component) {
  function ComponentWithRouterProps(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProps;
}
class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
    this.props.requestFollowedUsers();
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.router.params.userId !== this.props.router.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    if (!this.props.router.params.userId && !this.props.authorizedUserId) return <Navigate to="/login" />;
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.router.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile, requestFollowedUsers }),
  withRouter
)(ProfileContainer);
