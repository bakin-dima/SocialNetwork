import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { reduxForm } from "redux-form";
import { login, logout } from "../../redux/authReducer";
import { requiredField } from "../../utils/validators/validators";
import Button from "../common/Button/Button";
import { Input, createField, CheckBox } from "../common/FormsControls/FormsControls";
import styleForm from "../common/FormsControls/FormsControls.module.scss";
import styles from "./Login.module.scss";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form className={styleForm.baseForm} onSubmit={handleSubmit}>
      {error && <div className={styleForm.formSummaryError}>{error}</div>}
      {createField("Email", "email", Input, [requiredField])}
      {createField("Password", "password", Input, [requiredField], { type: "password" })}
      {createField(null, "rememberMe", CheckBox, [], { type: "checkbox", id: "rememberMe", text: "Remember Me", name: "rememberMe" }, "")}
      {captchaUrl && <img src={captchaUrl} alt="captcha" />}
      {captchaUrl && createField("Enter symbols", "captcha", Input, [requiredField])}

      <Button title="Login" />
      {/* <button>Login</button> */}
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "loginForm" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div className={styles.login}>
      <h1>LOGIN</h1>
      <h2>Hello to my Social Network</h2>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
