import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { usersAPI } from "../../api/api";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 26827;
    }
    usersAPI.currentUser(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  }
  componentDidUpdate(prevProps) {
    let userId = this.props.router.params.userId;
    if (prevProps.router.params.userId !== userId) {
      let userId = 26827;
      usersAPI.currentUser(userId).then((data) => {
        this.props.setUserProfile(data);
      });
    }
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));
