import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, photoUrl: "https://www.w3schools.com/w3images/avatar2.png", followed: false, fullName: "Dima B", status: "I study React-Redux", location: { city: "Minsk", country: "Belarus" } },
      { id: 2, photoUrl: "https://www.w3schools.com/w3images/avatar2.png", followed: false, fullName: "Vadim A", status: "I am a boss to", location: { city: "Minsk", country: "Belarus" } },
      { id: 3, photoUrl: "https://www.w3schools.com/w3images/avatar2.png", followed: true, fullName: "Kate S", status: "Hello motherfucker", location: { city: "Minsk", country: "Belarus" } },
    ]);
  }
  return (
    <div className={styles.users}>
      {props.users.map((u) => (
        <div key={u.id} className={styles.user}>
          <div className={styles.image}>
            <div>
              <img src={u.photoUrl} className={styles.userAvatar} alt="Avatar" />
            </div>
            <div>
              {
                // prettier-ignore
                u.followed 
              ? (<button onClick={() => {props.unfollow(u.id);}}>Unfollow</button>) 
              : (<button onClick={() => {props.follow(u.id);}}>Follow</button>)
              }
            </div>
          </div>

          <div className={styles.data}>
            <h3>{u.fullName}</h3>
            <p>{u.status}</p>
            <span>
              {u.location.country} {u.location.city}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
