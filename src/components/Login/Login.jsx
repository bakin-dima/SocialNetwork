import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import { login, logout } from "../../redux/authReducer";
import { requiredField } from "../../utils/validators/validators";
import { Input, createField } from "../common/FormsControls/FormsControls";
import style from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", Input, [requiredField])}
      {createField("Password", "password", Input, [requiredField], { type: "password" })}
      {createField(null, "rememberMe", Input, [], { type: "checkbox" }, "Remember Me")}
      <div>
        {error && <div className={style.formSummaryError}>{error}</div>}
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "loginForm" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
