import React from "react";
import { reduxForm } from "redux-form";
import { CheckBox, createField, Input, Textarea } from "../../common/FormsControls/FormsControls";
import styles from "./ProfileInfo.module.scss";
import style from "../../common/FormsControls/FormsControls.module.scss";
import Button from "../../common/Button/Button";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span>Name:</span> {createField("Full Name", "fullName", Input, [])}
      </div>
      <div>
        {createField(null, "lookingForAJob", CheckBox, [], {
          type: "checkbox",
          id: "lookingForAJob",
          name: "lookingForAJob",
          text: "Looking For A Job",
        })}
      </div>
      <div>
        <span>My profession skills: </span> {createField("My Skills", "lookingForAJobDescription", Textarea, [])}
      </div>
      <div>
        <span>About me:</span> {createField("About me", "aboutMe", Textarea, [])}
      </div>
      {Object.keys(profile.contacts).map((key) => {
        return (
          <div className={styles.contacts} key={key}>
            <span>{key}</span>
            {createField(key, "contacts." + key, Input, [])}
          </div>
        );
      })}
      <div>
        <Button title={"save"} />
      </div>
      <div>{error && <div className={style.formSummaryError}>{error}</div>}</div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "editProfile" })(ProfileDataForm);

export default ProfileDataReduxForm;
