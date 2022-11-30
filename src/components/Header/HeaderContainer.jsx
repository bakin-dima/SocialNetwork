import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData, setCurrentUser } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setAuthUserData(id, login, email);
        }
      })
      .then(() => {
        let userId = this.props.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
          this.props.setCurrentUser(response.data);
        });
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, userId: state.auth.userId, currentUser: state.auth.currentUser });

export default connect(mapStateToProps, { setAuthUserData, setCurrentUser })(HeaderContainer);
