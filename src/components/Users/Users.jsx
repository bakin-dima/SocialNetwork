import axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import user_avatar_placeholder from "../../assets/images/user_avatar_placeholder.png";

class Users extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  getUsers = () => {
    if (this.props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then((response) => {
        this.props.setUsers(response.data.items);
      });
    }
  };
  render() {
    return (
      <div className={styles.users}>
        <button onClick={this.getUsers}>Get users</button>

        {this.props.users.map((user) => (
          <div key={user.id} className={styles.user}>
            <div className={styles.image}>
              <div>
                <img src={user.photos.small != null ? user.photos.small : user_avatar_placeholder} className={styles.userAvatar} alt="User avatar" />
              </div>
              <div>
                {
                  // prettier-ignore
                  user.followed 
                ? (<button onClick={() => {this.props.unfollow(user.id);}}>Unfollow</button>) 
                : (<button onClick={() => {this.props.follow(user.id);}}>Follow</button>)
                }
              </div>
            </div>

            <div className={styles.data}>
              <h3>{user.name}</h3>
              <p>{user.status}</p>
              <span>{"{user.location.country} {user.location.city}"}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
