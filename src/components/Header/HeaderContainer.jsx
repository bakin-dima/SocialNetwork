import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData, setCurrentUser } from "../../redux/authReducer";
import { usersAPI, authAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI
      .authUser()
      .then((data) => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;
          this.props.setAuthUserData(id, login, email);
        }
      })
      .then(() => {
        let userId = this.props.userId;
        usersAPI.currentUser(userId).then((data) => {
          this.props.setCurrentUser(data);
        });
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, userId: state.auth.userId, currentUser: state.auth.currentUser });

export default connect(mapStateToProps, { setAuthUserData, setCurrentUser })(HeaderContainer);
