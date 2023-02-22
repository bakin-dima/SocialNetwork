import React from "react";
import styles from "./Button.module.scss";

const Button = ({ title, action, animation = true }) => {
  return (
    <div className={styles.buttonBlock}>
      {animation && <span className={styles.top}></span>}
      {animation && <span className={styles.right}></span>}
      {animation && <span className={styles.bottom}></span>}
      {animation && <span className={styles.left}></span>}
      <button className={styles.button} onClick={action}>
        {title}
      </button>
    </div>
  );
};

export default Button;
