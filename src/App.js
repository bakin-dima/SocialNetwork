import React, { Component } from "react";
import { Navigate, Route, Routes, BrowserRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import "./App.css";
import store from "./redux/reduxStore";
import { initializeApp } from "./redux/appReducer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <div className="app-wrapper__main">
          <HeaderContainer />
          <NavbarContainer />
          <div className="app-wrapper__content">
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/profile/" element={<ProfileContainer />}>
                <Route path="/profile/:userId" element={<ProfileContainer />} />
              </Route>
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users/*" element={<UsersContainer />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SocialNetworkJsApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default SocialNetworkJsApp;
