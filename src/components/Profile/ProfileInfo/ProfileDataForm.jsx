import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";
import styles from "./ProfileInfo.module.css";
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      <div>{error && <div className={style.formSummaryError}>{error}</div>}</div>
      <div>fullName: {createField("Full Name", "fullName", Input, [])}</div>
      <div>Looking for a job: {createField(null, "lookingForAJob", Input, [], { type: "checkbox" })}</div>
      <div>My profession skills {createField("My Skills", "lookingForAJobDescription", Textarea, [])}</div>
      <div>About me: {createField("About me", "aboutMe", Textarea, [])}</div>
      <div>
        Contacts:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div className={styles.contacts} key={key}>
              <b>{key}</b>
              {createField(key, "contacts." + key, Input, [])}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "editProfile" })(ProfileDataForm);

export default ProfileDataReduxForm;
