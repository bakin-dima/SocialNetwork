import axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import user_avatar_placeholder from "../../assets/images/user_avatar_placeholder.png";

class Users extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount)
      });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
    });
  };

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div className={styles.pages}>
          {pages.map((p) => (
            <span
              className={this.props.currentPage === p && styles.selectedPage}
              onClick={(e) => {
                this.onPageChanged(p);
              }}
            >
              {p}
            </span>
          ))}
        </div>

        <div className={styles.users}>
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
                <p>{"user.status"}</p>
                <span>{"{user.location.country} {user.location.city}"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
