import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  // componentDidMount() {
  //   this.props.getAuthUserData();
  // }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, login: state.auth.login, userId: state.auth.userId, currentUser: state.auth.currentUser });

export default connect(mapStateToProps, { logout })(HeaderContainer);
