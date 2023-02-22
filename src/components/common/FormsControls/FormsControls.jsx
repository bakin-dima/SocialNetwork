import React from "react";
import styles from "./FormsControls.module.scss";
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

export const CheckBox = (props) => {
  const { input, meta, children, type, id, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} type={type} id={id} {...restProps} />
      <label for={id}>{restProps.text}</label>
    </FormControl>
  );
};

export const createField = (placeholder, name, component, validators, props = {}, text = "") => (
  <div className={styles.field}>
    <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props} />
    {/* {label && <label for={name}>{text}</label>} */}
  </div>
);
