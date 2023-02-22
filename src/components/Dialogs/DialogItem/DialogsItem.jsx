import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Dialogs.module.scss";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={styles.user}>
      <NavLink className={(NavData) => (NavData.isActive ? styles.active : "")} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
