import React, { Component, lazy, Suspense } from "react";
import { Navigate, Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import "./App.css";
import store from "./redux/reduxStore";
import { initializeApp } from "./redux/appReducer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
//const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));
// const UsersContainer = lazy(() => import("./components/Users/UsersContainer"));
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
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="*" element={<div className="error_404">404 NOT FOUND</div>} />

                <Route path="/login" element={<Login />} />
                <Route path="/profile/" element={<ProfileContainer />}>
                  <Route path="/profile/:userId" element={<ProfileContainer />} />
                </Route>
                <Route path="/profile" element={<ProfileContainer />} />
                <Route path="/dialogs/*" element={<DialogsContainer />} />
                <Route path="/users/*" element={<UsersContainer />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </Suspense>
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
