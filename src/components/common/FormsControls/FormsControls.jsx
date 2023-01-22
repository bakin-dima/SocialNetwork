import React from "react";
import styles from "./FormsControls.module.css";

export const FormControl = (props) => {
  const hasError = props.meta.error && props.meta.touched;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{props.meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  return (
    <FormControl {...props}>
      <textarea {...props.input} {...props} />
    </FormControl>
  );
};

export const Input = (props) => {
  return (
    <FormControl {...props}>
      <input {...props.input} {...props} />
    </FormControl>
  );
};
