import React from "react";
import styles from "./FormsControls.module.css";
import { Field } from "redux-form";

export const FormControl = ({ children, input, meta: { error, touched } }) => {
  const hasError = error && touched;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (placeholder, name, component, validators, props = {}, text = "") => (
  <div>
    <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props} /> {text}
  </div>
);
