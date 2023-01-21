import React from "react";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";

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
    this.props.getUserProfile(userId);
  }
  componentDidUpdate(prevProps) {
    let userId = this.props.router.params.userId;
    if (prevProps.router.params.userId !== userId) {
      let userId = 26827;
      this.props.getUserProfile(userId);
    }
  }

  render() {
    if (!this.props.isAuth) return <Navigate to={"/Login"} />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { getUserProfile })(withRouter(ProfileContainer));
